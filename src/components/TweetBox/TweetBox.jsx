import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";
import { useState } from "react";

export default function TweetBox({userProfile, setTweets, tweets, tweetText, setTweetText}) {


  const disabled = tweetText.length === 0 || tweetText.length>140
  
  function handleOnTweetTextChange (event) {
    setTweetText(event.target.value);
  };
  
  function handleOnSubmit() {
    var newTweet = {
      id: tweets.length,
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    setTweets(tweets.concat(newTweet));
    setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={disabled} />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount({tweetText}) {
  // ADD CODE HERE

  const count = tweetText.length === 0 ? "": 140 -tweetText.length
  return <span>{count}</span>;
}

export function TweetSubmitButton({ handleOnSubmit, disabled }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button disabled = {disabled} className="tweet-submit-button" onClick={() => handleOnSubmit()}>
        Tweet
      </button>
    </div>
  );
}
