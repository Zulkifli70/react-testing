// Counter.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("harus menampilkan jumlah awal 0", () => {
    render(<Counter />);
    expect(screen.getByText("Jumlah: 0")).toBeInTheDocument();
  });

  it("harus bertambah 1 setiap tombol diklik", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const tombol = screen.getByRole("button", { name: "Tambah" });
    await user.click(tombol);

    expect(screen.getByText("Jumlah: 1")).toBeInTheDocument();
  });
});
