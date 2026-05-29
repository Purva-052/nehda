import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Helper: build auth headers using the JWT token
function authHeaders(token: string): Record<string, string> {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ── GET MENU ─────────────────────────────
export function useDailyMenu() {
  return useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(`${API}/menu`);
      if (!res.ok) {
        throw new Error("Failed to fetch menu");
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData: [],
  });
}

// ── VERIFY PASSWORD ─────────────────────
export function useVerifyPassword() {
  return useMutation({
    mutationFn: async (password: string) => {
      const res = await fetch(`${API}/verify-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        throw new Error("Incorrect password");
      }
      const data = await res.json();
      return data.token as string; // ← JWT token returned from server
    },
  });
}

// ── ADD ITEM ─────────────────────────────
export function useAddMenuItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      description,
      token,
    }: {
      name: string;
      description: string;
      token: string;
    }) => {
      const res = await fetch(`${API}/menu`, {
        method: "POST",
        headers: authHeaders(token),
        body: JSON.stringify({ name, description }),
      });
      if (!res.ok) {
        throw new Error("Add failed");
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menu"] });
    },
  });
}

// ── UPDATE ITEM ─────────────────────────
export function useUpdateMenuItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      name,
      description,
      token,
    }: {
      id: string;
      name: string;
      description: string;
      token: string;
    }) => {
      const res = await fetch(`${API}/menu/${id}`, {
        method: "PUT",
        headers: authHeaders(token),
        body: JSON.stringify({ name, description }),
      });
      if (!res.ok) {
        throw new Error("Update failed");
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menu"] });
    },
  });
}

// ── DELETE ITEM ─────────────────────────
export function useDeleteMenuItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      token,
    }: {
      id: string;
      token: string;
    }) => {
      const res = await fetch(`${API}/menu/${id}`, {
        method: "DELETE",
        headers: authHeaders(token),
      });
      if (!res.ok) {
        throw new Error("Delete failed");
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menu"] });
    },
  });
}