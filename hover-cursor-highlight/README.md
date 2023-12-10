# hover-cursor-highlight

Source : [You Need This Hover Effect On Your Site ASAP (CSS / JS)](https://www.youtube.com/watch?v=htGfnF1zN4g)

The first effect imitation video in [Hyperflexed's](https://www.youtube.com/@Hyperplexed) channel. Youtube algorithm recommend me this video. Nothing much to expect, but his straight-to-the-point presentation style and soothing voice really hooked me up. Subscribed.

## Logs

1. Today I learned about `::before` pseudo element. It was used to insert content to an element without introducing a new element. I thought it will be used to insert image or icon, but he's inserting glows! Pretty cool!

2. I have no idea why there's multiple z-indexes on each classes. The `.card` is the parent element. Both the children (`.card-border` and `.card-content`) is covering its parent entirely. So I think z-index on `.card::before` is already enough.

   - Update 11/12/2023: I commented out other z-indexes and put the necessary one on `.card::before`. Refer commit [83e9a7d](https://github.com/mirza-sync/hyperflexed/commit/83e9a7d06c8ef39a9be4077e92f5e6d7216c41da). The effect stays the same. Guess I'm right tho, XD

3. I have no idea how the javascript portion works lol. So much going on.

4. Done with the tutorial. Overall very impressed with it. There's no way I can came out with this on my own. Didn't even understand some of it even though the guy explains each of his step. But it's okay. I'll keep on coding and discover more incomprehensible stuff. And things will unravel eventually.

> Just code.
