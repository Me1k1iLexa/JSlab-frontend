import { useCallback, useState } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript} from "@codemirror/lang-javascript";

//Изначальный код и callback для родителя
interface CodeEditorProps {
    initialCode?: string;
    onChange?: (value: string) => void;
}

const CodeEditor = ({initialCode = '', onChange}: CodeEditorProps) => {
    const [code, setCode] = useState<string>(initialCode);

    const handleChange = useCallback((value: string) => {
        setCode(value);
        if (onChange) onChange(value);
    },[onChange]);

    return(
        <>
            <ReactCodeMirror
                value={code}
                height="400px"
                extensions={[javascript({jsx: false})]}
                onChange={handleChange}
            />
        </>
    )
}
export default CodeEditor;