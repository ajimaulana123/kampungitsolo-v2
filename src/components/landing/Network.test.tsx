import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Network } from "./Network";

const resources = [
  {
    name: "Alwustho",
    desc: "Riset & sistem digital — bagian dari Bin Alfan Group",
    href: null,
  },
  {
    name: "Aflaha",
    desc: "Platform digital unggulan",
    href: null,
  },
  {
    name: "Elfan Bookless Library",
    desc: "Perpustakaan digital tanpa buku fisik",
    href: "https://elfanaiacademy.com",
  },
  {
    name: "Ufuk Hijau Energi",
    desc: "Solusi energi terbarukan berkelanjutan",
    href: "https://ufukhijau.com",
  },
  {
    name: "Elfan AI Academy",
    desc: "Akademi kecerdasan buatan & inovasi digital",
    href: "https://elfanaiacademy.com",
  },
  {
    name: "Elfan System",
    desc: "16 modul Digital Islamic Education",
    href: "https://elfanaiacademy.com",
  },
  {
    name: "Ufuk Hijau Academy",
    desc: "Pusat pelatihan & pengembangan SDM",
    href: "https://ufukhijau.com",
  },
  {
    name: "Bootcamp IT",
    desc: "Pelatihan IT intensif untuk pemula & mahir",
    href: "https://elfanaiacademy.com",
  },
  {
    name: "TUK",
    desc: "Tempat Uji Kompetensi — sertifikasi keahlian",
    href: "https://ufukhijau.com",
  },
  {
    name: "Smart Revolusioner Fundraising",
    desc: "Platform penggalangan dana revolusioner",
    href: null,
  },
  {
    name: "Elfan Academy",
    desc: "Pusat edukasi & pengembangan bakat digital",
    href: "https://elfanaiacademy.com",
  },
];

function findCard<T extends HTMLElement>(cards: T[], name: string) {
  const card = cards.find((candidate) => candidate.textContent?.includes(name));
  if (!card) throw new Error(`Card not found: ${name}`);
  return card;
}

describe("Network directory", () => {
  it("shows the resource count and keeps every resource in its original order", () => {
    render(<Network />);

    expect(screen.getByText("11 RESOURCES")).toBeInTheDocument();

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(resources.length);

    resources.forEach((resource, index) => {
      const card = cards[index];

      expect(card).toHaveTextContent(resource.name);
      expect(card).toHaveTextContent(resource.desc);
      expect(card).toHaveTextContent(String(index + 1).padStart(2, "0"));
    });
  });

  it("sends Ufuk to ufukhijau.com and Elfan to elfanaiacademy.com", () => {
    render(<Network />);

    const external = resources.filter((resource) => resource.href !== null);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(external.length);

    external.forEach((resource) => {
      const link = findCard(links, resource.name);

      expect(link).toHaveAttribute("href", resource.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveTextContent("buka di tab baru");
    });
  });

  it("opens a coming soon modal for the remaining resources", async () => {
    render(<Network />);

    expect(screen.getAllByRole("button")).toHaveLength(3);

    const aflaha = findCard(screen.getAllByRole("button"), "Aflaha");
    fireEvent.click(aflaha);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveTextContent(/coming soon/i);
    expect(dialog).toHaveTextContent(/segera hadir/i);
    expect(dialog).toHaveTextContent("Aflaha");

    fireEvent.click(within(dialog).getByRole("button", { name: /tutup/i }));

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});
