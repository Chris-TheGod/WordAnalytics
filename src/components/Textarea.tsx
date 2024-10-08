import { Dispatch, SetStateAction, useState } from 'react';
import Warning from './Warning';

type TextareaProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

export default function Textarea({ text, setText }: TextareaProps) {
  const [warningText, setWarningText] = useState<string>('');

  const handleChange = (e: any) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      setWarningText('No script tag allowed!');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarningText('No @ symbol allowed!');
      newText = newText.replace('@', '');
    } else {
      setWarningText('');
    }

    setText(newText);
  };

  return (
    <div className='textarea'>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder='Enter your text...'
        spellCheck='false'
      />
      <Warning warningText={warningText} />
    </div>
  );
}
