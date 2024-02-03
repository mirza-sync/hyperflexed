# hover-cursor-slide

This time we're re-creating the elegantly simple header from Superlist!

Source: [I've Found the Optimal Website Header and...](https://www.youtube.com/watch?v=zGKNMm4L-r4).

> Why he's calling it a header? I thought it should be called jumbotron, or hero section, etc. 🤔

## Logs

1. I've set the body's `width: 100vw` and `height: 100vh`, the add `overflow: hidden`. But the scroll bars were still there. Why??? I Googled it and found out that every body element have a default padding to it. Can't beleive that I forgot this basic stuff. I've learned this years ago in W3School hahahahaha (Feeling dumb currently).

   > Hope I won't google on how to center a div inside another div. `display: grid; place-items: center`. Future me pls dont forget this. 😉

2. Damn... making the sliding on hover effect is actually so simple. Just get the x's cursor posotion, get the percentage relative to window's width, and set the percentage to the `left-side` element. Hoping one day I'll be creative enough to be able figure out things like this by myself. #KeepLearning.

   > The sliding effect is easy, but sliding into your DM is hard #rejection😢

3. Followed the tutorial and change the `font-family` to `Lobster`. Unfortunately I don't have it in my laptop, and it fallback into something that looks like `Comic Sans`. And the awesome effect suddenly turns into the worst creation.
   > Just one small change, and the sleeping beauty turns into an ugly beast.
