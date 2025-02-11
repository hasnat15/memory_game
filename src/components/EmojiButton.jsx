


export default function EmojiButton({ content, handleClick,  selectedCardEntry,  matchedCardEntry }) {

    const btnContent= matchedCardEntry||selectedCardEntry ? content :'?'
    const btnStyle =
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" :
        "btn--emoji__front"
 
    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={handleClick}
        >
            {btnContent}
        </button>
    )
}