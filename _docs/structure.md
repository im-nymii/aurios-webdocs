---
title: Project structure
permalink: /structure/
---

Layout of the AuriOS repository. The tree below is generated with the
[`tree`](https://linux.die.net/man/1/tree) command, excluding build directories:

```bash
tree -I 'build|output|iso|.git' --dirsfirst
```

## Repository root

```text
aurios
├── docs
│   ├── install_scripts
│   ├── CONTRIBUTING.md
│   ├── INSTALLATION.MD
│   ├── loader.md
│   └── setup-installation.md
├── src
│   ├── boot
│   ├── cpu
│   ├── drivers
│   ├── include
│   ├── kernel
│   ├── lib
│   └── mm
├── tests
│   └── integrations
├── LICENSE
├── linker.ld
├── Makefile
├── README.md
└── walkman.yaml
```

<br>
The kernel source lives in `src`, organized by domain (boot, CPU, drivers,
kernel core, library and memory management):

```bash
tree -I 'build|output|.git|iso' --dirsfirst src
```

## `src` in detail

```text
src
├── boot
│   └── loader.s
├── cpu
│   ├── gdt_flush.asm
│   ├── gdt.c
│   ├── idt_flush.asm
│   ├── idt.c
│   ├── irq.c
│   ├── isr_stubs.asm
│   ├── isr.c
│   └── pic.c
├── drivers
│   ├── framebuffer.c
│   ├── keyboard.c
│   ├── serial.c
│   └── timer.c
├── include
│   ├── ansi.h
│   ├── colors.h
│   ├── fetch.h
│   ├── font.h
│   ├── framebuffer.h
│   ├── gdt.h
│   ├── history.h
│   ├── idt.h
│   ├── integer.h
│   ├── io.h
│   ├── isr.h
│   ├── keyboard.h
│   ├── log.h
│   ├── memory.h
│   ├── mm.h
│   ├── multiboot.h
│   ├── pic.h
│   ├── serial.h
│   ├── shell.h
│   ├── string.h
│   ├── terminal.h
│   ├── timer.h
│   └── types.h
├── kernel
│   ├── ainsi.zig
│   ├── history.c
│   ├── kernel.c
│   ├── log.c
│   ├── shell.c
│   └── terminal.c
├── lib
│   ├── integer.c
│   ├── memory.c
│   └── string.c
└── mm
    ├── mmu.zig
    └── pmm.zig
```

## Key entry points

- `src/boot/loader.s` — Multiboot header and jump to the kernel.
- `src/kernel/kernel.c` — the `kernel_main` function, orchestrates startup.
- `src/kernel/shell.c` — the shell loop and command implementations.
- `src/mm/pmm.zig` and `src/mm/mmu.zig` — physical memory management and paging
  (written in Zig).
- `src/include/` — all public headers (types, drivers, mm…).
- `linker.ld` — memory layout of the kernel binary.
