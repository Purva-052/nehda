import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useAddMenuItem,
  useDailyMenu,
  useDeleteMenuItem,
  useUpdateMenuItem,
  useVerifyPassword,
} from "@/hooks/useMenuApi";
import { toDailyMenuItemView } from "@/types";
import type { DailyMenuItemView } from "@/types";
import { CheckCircle, Lock, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/* ── Login Step ───────────────────────── */
function LoginStep({ onVerified }: { onVerified: (token: string) => void }) {
  const [pw, setPw] = useState("");
  const verify = useVerifyPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    verify.mutate(pw, {
      onSuccess: (token) => {
        if (token) onVerified(token); // token is a JWT now
        else toast.error("Incorrect password.");
      },
      onError: () => toast.error("Incorrect password."),
    });
  };

  return (
    <form className="space-y-6 max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center shadow bg-primary/10">
        <Lock className="w-6 h-6 text-primary" />
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Enter admin password to manage today's menu.
      </p>

      <div>
        <Label>Password</Label>
        <Input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="mt-1"
        />
      </div>

      <Button className="w-full" disabled={!pw || verify.isPending}>
        {verify.isPending ? "Verifying..." : "Login"}
      </Button>
    </form>
  );
}

/* ── Edit Row ───────────────────────── */
function EditRow({
  item,
  token,
  onDone,
}: {
  item: DailyMenuItemView;
  token: string;
  onDone: () => void;
}) {
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description ?? "");
  const update = useUpdateMenuItem();

  const handleSave = () => {
    update.mutate(
      { id: item.id, name, description: desc, token },
      {
        onSuccess: () => {
          toast.success("Updated!");
          onDone();
        },
        onError: () => toast.error("Update failed."),
      }
    );
  };

  return (
    <div className="flex gap-2">
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      <Button onClick={handleSave}>Save</Button>
      <Button variant="ghost" onClick={onDone}>
        Cancel
      </Button>
    </div>
  );
}

/* ── Admin Panel ─────────────────────── */
function AdminPanel({ token }: { token: string }) {
  const { data: rawItems = [], isLoading } = useDailyMenu();
  const items = rawItems.map(toDailyMenuItemView);

  const addItem = useAddMenuItem();
  const deleteItem = useDeleteMenuItem();

  const [editId, setEditId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newName.trim()) {
      toast.error("Item name is required.");
      return;
    }

    addItem.mutate(
      { name: newName, description: newDesc, token },
      {
        onSuccess: () => {
          toast.success("Item added!");
          setNewName("");
          setNewDesc("");
        },
        onError: () => toast.error("Failed to add item."),
      }
    );
  };

  const handleDelete = (id: string) => {
    deleteItem.mutate(
      { id, token },
      {
        onSuccess: () => {
          toast.success("Deleted");
          setDeleteConfirmId(null);
        },
        onError: () => toast.error("Delete failed."),
      }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-green-600 text-sm border rounded px-3 py-2 bg-green-100">
        <CheckCircle className="w-4 h-4" />
        Logged in as admin
      </div>

      {/* Add */}
      <form onSubmit={handleAdd} className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase">
          Add New Item
        </p>

        <div className="flex gap-2">
          <Input
            placeholder="Item name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Input
            placeholder="Description"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <Button
            type="submit"
            disabled={!newName.trim() || addItem.isPending}
          >
            <Plus />
          </Button>
        </div>
      </form>

      {/* Items */}
      {isLoading ? (
        <Skeleton className="h-12" />
      ) : items.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No items yet — add your first item!
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50"
            >
              {editId === item.id ? (
                <EditRow
                  item={item}
                  token={token}
                  onDone={() => setEditId(null)}
                />
              ) : deleteConfirmId === item.id ? (
                <div className="flex gap-2 items-center">
                  <span>Delete "{item.name}"?</span>
                  <Button onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                  <Button onClick={() => setDeleteConfirmId(null)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => setEditId(item.id)}>
                      <Pencil className="w-4 h-4" />
                    </Button>

                    <Button onClick={() => setDeleteConfirmId(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Page ───────────────────────── */
export function AdminPage() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto p-6 border rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6">
          {token ? "Admin Panel" : "Admin Login"}
        </h1>

        {token ? (
          <AdminPanel token={token} />
        ) : (
          <LoginStep onVerified={setToken} />
        )}
      </div>
    </section>
  );
}