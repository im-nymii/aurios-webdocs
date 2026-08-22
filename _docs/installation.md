---
title: Requirements & environment
permalink: /installation/
---

AuriOS is a _freestanding_ kernel: it is built with a cross-compilation
toolchain targeting `i686-elf` and runs inside an emulator.

## Required tools

| Tool                                      | Purpose                          |
| ----------------------------------------- | -------------------------------- |
| `i686-elf-gcc`                            | Cross-compiler (i686-elf target) |
| `i686-elf-ld`                             | Cross linker                     |
| `nasm`                                    | Assembler (Netwide Assembler)    |
| `qemu-system-i386` / `qemu-system-x86_64` | Emulator to test the kernel      |
| `make`                                    | Build automation                 |
| `grub-mkrescue`, `xorriso`, `mtools`      | Bootable ISO image generation    |

> If `i686-elf-gcc` is not found, the `Makefile` automatically falls back to the
> host `gcc` with `-m32` flags. A proper cross toolchain is still recommended.

## Install dependencies

The `Makefile` provides per-distribution install targets:

```bash
make install-fedora    # Fedora / RHEL
make install-arch      # Arch Linux
make install-debian    # Debian / Ubuntu
make install-mac       # macOS (Homebrew required)
```

### macOS (manual)

```bash
brew install i686-elf-gcc nasm qemu xorriso
```

## Zig toolchain (optional)

AuriOS can also be built with the **Zig** toolchain instead of GCC:

```bash
make install-zig          # install the Zig compiler
make run USE_ZIG=1        # build and run with Zig
```

## Get the source code

```bash
git clone {{ site.repo_url }}.git
cd aurios
```

Once your environment is ready, move on to
[building & running](/building/).
