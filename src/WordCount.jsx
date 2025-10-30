import { useEffect, useState } from "react";

function WordCount() {
  const [message, setMessage] = useState('');
  const [wc, setWc] = useState(0);

  function updateMessage(e) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    setWc(message.split(' ').filter(s => !!s).length);
  }, [message])
  return (
    <div>
      <div>{wc}</div>
      <textarea placeholder="Enter message..." value={message} onChange={updateMessage}
                name="message" id="message" cols="50" rows="30">
      </textarea>
    </div>
)
}

export default WordCount;
