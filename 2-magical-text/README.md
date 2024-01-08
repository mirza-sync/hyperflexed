# Magical Text

Source : [This Effect Really Just Shouldn't Be Possible](https://www.youtube.com/watch?v=yu0Cm4BqQv0)

> Ahhhh css animation. I have such a love hate relationship with you.

This time we're creating an effect where part of the text having animated gradient color. And also sparkling stars!

## Logs

1. The animated gradient itself looks pretty dang sweet! `background-clip` is awesome.

2. Hyperflex uses christmas-star for his star icon, which is only available on Font Awesome pro. I used a star free version. Doensn't looks as cool but it gets the job done.

3. Fortunately I found out that he shared his magical-text codes on Codepen, and I found the christmas-star svg there. Copied it and tadaa, I have a good looking stars too. Is this legal? XD

4. And as always, the javascript going from "OK, understandable" to "What the fuck is going on?".

5. Turns out `Math.floor(Math.random() * (max - min + 1)) + min` is a de facto formula to get a random integer between two value. And I need ChatGPT to ELI5 to able to understand it, haha.

6. The `animate()` function itself is understandable. But to stagger the sparkling stars using `setTimeout` and `setInterval` is pretty confusing.

7. Oh ya, I also learned that you need to put the `<script>` tag at the end inside the body tag. HTML is executed top down. So if you put script inside the head tag, the script will be unable to find the elements. I've used too much JS frameworks and forgot the basics. Facepalm...

#UnlearnAndReLearn
