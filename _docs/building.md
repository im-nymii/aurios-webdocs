---
title: Building & running
permalink: /building/
---

Everything goes through the `Makefile` at the repository root. Run `make help`
to list the available targets.

## Build the kernel

```bash
make all
```

This target:

1. compiles all C files (`src/kernel`, `src/cpu`, `src/lib`, `src/drivers`);
2. assembles the `.s` and `.asm` files with `nasm`;
3. links everything into a kernel binary `output/AuriOS.bin` via `linker.ld`.

## Generate the ISO image

```bash
make iso
```

The binary is packaged with **GRUB** (Multiboot) into a bootable
`output/AuriOS.iso` image.

## Run in QEMU

```bash
make run        # QEMU x86_64
make run32      # QEMU i386
make run-mac    # macOS (direct boot)
```

## Test mode (serial output)

To build with test mode enabled (`AURI_TEST_MODE`, redirects logs to the serial
port):

```bash
make iso-debug
```

## Clean

```bash
make clean
```

Removes all build artifacts (`build/`, `output/`).

## Boot sequence

On startup, the kernel (`kernel_main`) initializes, in order: serial port, GDT,
PIC remapping, IDT, terminal, timer (1000 Hz), then enables interrupts. It then
sets up memory (PMM, then MMU paging), plays the logo animation, initializes the
keyboard and starts the [interactive shell](/shell/).
