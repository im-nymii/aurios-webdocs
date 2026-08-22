---
title: AuriOS Documentation
permalink: /
---

**AuriOS** is a minimal, educational operating system kernel for the **x86
(i686)** architecture, written from scratch in **C** and **Assembly**. Above
all, AuriOS is built with **privacy as its first priority**: no telemetry, no
silent data collection, and full transparency over what the system does. The
project explores the fundamentals of OS development, memory management,
interrupt handling and hardware interaction, while keeping the user in
complete control of their machine and their data.

<div class="bento">
  <a class="card card--wide" href="{{ '/installation/' | relative_url }}">
    <h3>Requirements</h3>
    <p>Install the cross-compilation toolchain and QEMU to build AuriOS from source.</p>
  </a>
  <a class="card" href="{{ '/building/' | relative_url }}">
    <h3>Building</h3>
    <p>Build the kernel and run it in an emulator.</p>
  </a>
  <a class="card" href="{{ '/shell/' | relative_url }}">
    <h3>The shell</h3>
    <p>Explore the interactive AuriOS shell.</p>
  </a>
  <a class="card card--wide" href="{{ '/architecture/' | relative_url }}">
    <h3>Architecture</h3>
    <p>Understand how the kernel works internally, from boot to shell.</p>
  </a>
  <a class="card" href="{{ '/structure/' | relative_url }}">
    <h3>Project structure</h3>
    <p>Browse the repository layout and find your way around the source tree.</p>
  </a>
  <a class="card" href="{{ '/commands/' | relative_url }}">
    <h3>Command reference</h3>
    <p>Every built-in shell command.</p>
  </a>
  <a class="card" href="{{ '/contributing/' | relative_url }}">
    <h3>Contributing</h3>
    <p>Join the project and submit your first PR.</p>
  </a>
</div>

## Current features (v0.2)

- **System components**: GDT, IDT with ISR handlers, PIC remapping, Multiboot
  loader.
- **Memory management**: physical memory manager (PMM), paging (MMU), dynamic
  heap allocation (`malloc` / `free`).
- **Hardware drivers**: keyboard, programmable interval timer (PIT), serial
  output, VGA framebuffer / terminal.
- **Interface**: interactive shell with command history and colors.

## Who this documentation is for

- **OS developers** curious about the low-level workings of an x86 kernel.
- **Contributors** who want to build, test and evolve AuriOS.
- **Students** learning systems programming.

> AuriOS is an open project released under the MIT license. The source code is
> available on [GitHub]({{ site.repo_url }}). See the
> [Contributing](/contributing/) page to get involved.
