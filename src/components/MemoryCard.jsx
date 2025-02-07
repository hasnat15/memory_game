import { decodeEntity } from 'html-entities'
import EmojiButton from './EmojiButton'

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {  
    const cardEl = data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)
        
        return (
            <li key={index} className="card-item">
                <EmojiButton
                    content={decodeEntity(emoji.htmlCode[0])}
                    style="btn btn--emoji"
                    handleClick={() => handleClick(emoji.name, index)}
                />
            </li> 
        )
    })
    
    return <ul className="card-container">{cardEl}</ul>
}