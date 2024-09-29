export default function PreviousButton({jumpTo, text}){
    return(
        <button onClick={jumpTo}>see move N° {text}</button>
    );
}