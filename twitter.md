### Question:
You are tasked to re-design Twitter. What changes would you propose and how would you implement them?

### Answer:
> Disclaimer: I do not use Twitter very much, so I'm hopeful that my answers aren't parts of the product that already exist.

Assuming that we get to do what ever we want with it a few features that come to mind:
1. [MySpace-ify](#myspace-ify)
1. [Post to Reddit Button](#post-to-reddit-button)

#### MySpace-ify
> Disclaimer: Honestly, I didn't use MySpace much either.

Why should Twitter get to decide what your feed looks like? Why should they get to decide how other people see your posts? Sure, you can download a another app with different fonts and colors but this is supposed to be about expressing yourself to others too!

The most nostalgic thing about MySpace is that you didn't just have a page about you and a way to connect to your friends, but you could customize your page. MySpace taught a generation how to write HTML and CSS, now we can use Twitter teach a generation simple React!

This feature would allow users to interface with a plethora of pre-built components and a canvas for laying out their own custom `TweetLayout`. Once they have designed a `TweetLayout` their tweets will all be displayed with the layout. If they like it they can share the code as a downloadable `TweetLayout` for other users to use (all credit to the original creator of course).

In the initial round things would really be about managing different kinds of styles and display layouts. Users wouldn't need to worry about managing stateful components since everything would just be a display component with state passed down.

```javascript
import React from 'react';

export default function TweetLayout(props) {

  return (
    <>
      <p>{props.tweetText}</p>
    </>
  );
};
```

Users would be given a base `TweetLayout` for them to customize. From here they can change the simple things, maybe make the `<p>` tag into an `<em>` tag. But they could also integrate some logic into the flow as well. This theme is called `LazySunday`:

```javascript
import React from 'react';
import Text from '@twitter/components';
import {Standard} from '@twitter/fonts';
import {CantWrite} from '@fontspace/forberas';

export default function TweetLayout(props) {
  const {tweetText} = props;

  let font = Standard;
  if (new Date().getDay() === 0) {
    font = CantWrite;
  }

  return (
    <div>
      <Text font={font}>{tweetText}</Text>
    </div>
  );
};
```
Now, every Sunday all the users' tweets use the [Can't Write](https://www.fontspace.com/can-t-write-font-f84516) font downloaded from `@frontspace/forberas`.

As we continue to expand the feature we can include all sorts of interesting animations, interactions, and things. Future features might include:

- Pre-filled customizable retweet functionality for giving followers suggestions on what to say.
- More built in pre-generated components for users to pick up and play with
- With each tweet being it's own user experience people could start building interactive polls, and even massively multi-player experience games by interacting with a single tweet ("Twitter plays Chess" anyone?)

With all this user generated content we can sit back and truly let Twitter run itself without having to worry about generating new features all the time. As we and the users find popular trends we can bake those directly into the platform!

#### Post to Reddit Button
It's great that you can get all these followers, responses, and likes on Twitter, but what if you could go cross platform right from your feed? Ever see a tweet and think _"I could get some massive karma for that!"_, now you can with just a simple tap right from the Twitter app.

Connect your Reddit account with Oauth in your Twitter profile and start farming that sweet tweet karma right away.

1. When you tap the `Post to Reddit` button it will take a screenshot of the tweet for you to edit.
1. Mark it up with stickers, paint, and whatever else.
1. Select which mentions to display or not and the system will automatically blur those that should be hidden.
1. Then, simply pick the most applicable subreddit from your list of curated favorites or type in a new one. 
    - If you want, you can even cross post to multiple subreddits at the same time.
1. Best of all, when you post to Reddit from Twitter it will include a link for people to come back and find the source right away.
1. Watch those likes and karma start rolling in.