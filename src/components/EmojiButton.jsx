


export default function EmojiButton({ content, style, handleClick,  selectedCardEntry,  matchedCardEntry }) {

    const btnContent= matchedCardEntry||selectedCardEntry ? content :'?'
    return (
        <button
            className={style}
            onClick={handleClick}
        >
            {btnContent}
        </button>
    )
}