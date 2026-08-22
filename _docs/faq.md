---
title: FAQ
permalink: /faq/
---

Frequently asked questions about AuriOS.

## What is AuriOS?

A minimal, educational operating system kernel for the **x86 (i686)**
architecture, written in C and Assembly. It serves as a learning platform for OS
development.

## Which architecture is supported?

AuriOS targets **32-bit x86 (i686)**. It is built with an `i686-elf` cross
toolchain and runs in QEMU (`qemu-system-i386` or `qemu-system-x86_64`).

## Is AuriOS free and open source?

Yes. AuriOS is released under the **MIT** license. The source code is available
on [GitHub]({{ site.repo_url }}).

## Can I build it without a cross toolchain?

The `Makefile` automatically falls back to the host `gcc` (with `-m32`) if
`i686-elf-gcc` is missing, but an `i686-elf` cross toolchain is recommended for
reliable results. The **Zig** toolchain is also supported
(`make run USE_ZIG=1`).

## How do I test the kernel?

Build and run the ISO in QEMU with `make run` (or `make run32`, `make run-mac`).
The `make iso-debug` mode enables serial output for debugging.

## How do I report a bug?

Open an _issue_ on the GitHub repository with a detailed description and steps to
reproduce.

## How do I contribute?

See the [Contributing](/contributing/) page. In short: fork, create a branch from
`develop`, and open a Pull Request against `develop`.
