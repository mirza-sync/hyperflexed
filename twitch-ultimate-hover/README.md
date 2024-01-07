# Twitch's Ultimate Hover Effect

This time we're copying a card hover effect that can be found on Twitch's UI revamp.

Source: [Twitch has Created the Ultimate CSS Hover Effect](https://www.youtube.com/watch?v=joDhIH6Xumw)

## Logs

1. Never follow tutorial blindly. The tutorial starts with him setting up the body's css, do css for .card's gradient background using css variables, and write the css transition effect. However when I do the same and look at the result on my Chrome, I see nothing T_T... I frustrated a little, reloaded Chrome a few times hoping something different will happen, still nothing. I backtracked the video, making sure that I followed it step-by-step and not to miss anything.

   - After a few minutes of futile, the debugger mindset kicks-in. I inspect the elements, and see if anything wrong. When I look at the background property, I see no colors defined for the css variables! No wonder hahaha.
   - Then I look at the video description to open the Codepen link, and the colors are there. Copy-paste and done. The colors are back! Woohoo. I think Hyperflexed done this on purpose. He wanted his viewers to put in the effort to solve problems instead of just following blindly. Thanks Hyperflexed. (Or maybe he just forget to record the css setup part at the beginning, and too lazy to re-record).

2. Finished the tutorial on 6th Jan 2024. This one been delayed for lot of days. Been busy with work. My company's system will be deployed live this year, so need to focus on bug fixes and user training. Too tired to code after work 😵‍💫.

3. Btw I think this hover effect is the coolest among all. The gradient background transition is so dang sweet, and the staggering text appear effect was chef's kiss.

4. This time, the css uses lots of `vmin` unit. I've heard of these modern css units thing, but never used it before. The only time I used a modern unit was setting `height: 100vh` on body element to make it fully occupies the viewport lol. Guess I need to put "_Modern CSS Units_" in my reading list.

5. Found an article about [Simple Little Use Case for `vmin`](https://css-tricks.com/simple-little-use-case-vmin/). Fascinating.
