import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-solarizedlight.css';

function Code({content}: any) {
    // Highlight code using Prism on the server
  const highlightedCode = Prism.highlight(
    content,
    Prism.languages.python,
    'python'
  );
    return ( 
        <div>
        <pre className=' rounded p-4 pb-6 bg-[#f5f6f7] dark:bg-[#132a3a] overflow-x-scroll'>
            <code 
                className='font-mono language-python'
                dangerouslySetInnerHTML={{ __html: highlightedCode }} 
            />
        </pre> 
 
        </div>
     );
}

export default Code;