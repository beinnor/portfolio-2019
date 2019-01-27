---
layout: default
categories: c tutorial
permalink: /:title
---

# Very short tutorial on pointers in C

Pointers point to a location in memory. So a pointer itself only contains a memory address. So simple, yet difficult to understand.

Look at this example code:

    int* a;
    int* b;

    a = 5;
    b = 6;

    printf("a: %d, b: %d", a, b);

So a pointer will just be an address in memory.
