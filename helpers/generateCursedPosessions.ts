import CursedPossession from '../models/CursedPossession'
import CursedPossessionInteractions from '../models/CursedPossessionInteractions'

export default () => {

    const ouija = new CursedPossession(
        "Ouija Board",
        "The ghost can be asked questions to get definitive information at the cost of player sanity.",
        [
            "Breaking the Ouija Board can be useful for completing several hunt-related objectives or earning photo rewards by taking a picture of the ghost.",
            "You can quickly decrease a player's sanity (and, by extension, the average sanity of your team) by using the Ouija Board repeatedly, even while it's in the middle of answering another question.",
            "You can repeatedly ask low-cost questions with the Ouija Board in order to create numerous interactions; with an EMF Reader nearby, EMF level 5 reading may be quickly attained, as each question has a 1/4 chance to give off the evidence.",
            "When using voice chat to ask questions, wait at least a few seconds for the board to respond before asking again, to avoid breaking the board when asking high sanity-deducting questions."
        ],
        new CursedPossessionInteractions(
            'Questions',
            [
                "Where are you?",
                "What is your favorite room?",
                "Where is your room?",
                "What is your room?",
                "Are you here?",
                "Are you close?",
                "Where is the bone?",
                "Where did you die?",
                "Where is your body?",
                "(Do you want to play) hide and seek?",
                "How many are in this room?",
                "How many people are in this room?",
                "How many people are here?",
                "How many ghosts are in this room?",
                "How many ghosts are here?",
                "Are you alone?",
                "Are we alone?",
                "Who is here?",
                "Who is in this room?",
                "How many ghosts are present?",
                "How many people are present?",
                "Do you respond to everyone?",
                "How old are you?",
                "What is your age?",
                "Are you old?",
                "Are you young?",
                "How long have you been dead?",
                "How many years ago did you die?",
                "How long have you been here?",
                "How long ago did you die?",
                "When did you die?",
                "What is my sanity?",
                "How crazy am I?",
                "How insane am I?",
                "Am I insane?",
                "How do you feel?",
                "Are you okay?",
                "How are you?",
                "Why are you here?",
                "What do you want?",
                "Knock knock",
                "Marco"
            ]
        ),
    )

    const tarot = new CursedPossession(
        "Tarot Cards",
        "Each Tarot cards deck contains 10 randomly generated cards. There are 10 possible card types the player can draw, each having a unique effect on either the player or the ghost. After being used, each card will burn up and vanish in a uniquely-colored flame. Each card type has a different, independent chance of being drawn, so some card types can be drawn multiple times or not at all in a single deck.",
        [
            "The player should not draw a card during a hunt, since all cards drawn will be The Fool.",
            "Players should take a photo of the cards before using them, as once all of the cards are used, the deck will disappear and no photo can be taken."
        ],
        new CursedPossessionInteractions(
            "Cards",
            [
                "The Tower: Causes an interaction and doubles all ghost activity for 20 seconds.",
                "The Wheel of Fortune: The individual player gains 25% sanity if the card burns green, or loses 25% sanity if the card burns red.",
                "The Fool: Randomly selects another card (with equal chance) to appear as, before turning into The Fool as it burns. No effect is applied when drawing this card.",
                "The Devil: Triggers a Ghost Event towards the nearest player to the ghost.",
                "Death: Triggers a cursed hunt.",
                "The Hermit: Teleports the ghost back to its ghost room and traps it there for 1 minute. This does not affect hunts and ghost events.",
                "The Sun: Fully restores the individual player's sanity to 100%.",
                "The Moon: Instantly drops the individual player's sanity to 0%.",
                "The High Priestess: Revives a randomly chosen dead player at their corpse. If no one is currently dead, it will revive the next player who dies. Multiple cards do not stack. If a player dies and revives in the same hunt, they cannot be killed again for that hunt (i.e. the player cannot die twice in the same hunt)",
                "The Hanged Man: Instantly kills the player. The player can only draw the The Fool variant of this card if the 'Friendly Ghost' custom difficulty option is turned on, and the actual The Hanged Man card will never be drawn."
            ]
        )
    )

    const music = new CursedPossession(
        "Music Box",
        "When picked up, the music box will open (this does not mean that it has been activated). The music box can then be activated by using the primary use (default: right click on mouse) key. Doing so will end the setup phase early if it is ongoing. The music box cannot be activated during a hunt, and can only be used once. Once activated, the music box will make the ghost sing along while remaining invisible, broadcasting its current location. If the music box is within 5 metres of the ghost, it will trigger a ghost event where the ghost manifests and begins to walk towards the box. The music box can be handheld or placed on the floor, the latter being the only safe way to discard the box without triggering a cursed hunt before the ghost event. In all cases, the box will close once it stops playing. "
    )

    const mirror = new CursedPossession(
        "Haunted Mirror",
        "The mirror can be toggled (default: right click on mouse) while inside the investigation area. When activated, the haunted mirror will show a view of a part of the favourite room as a sweeping panorama, allowing players to locate the room by cross-reference. This view is a live feed of the room, so any lights turned on, items moved, and equipment or players present in the room will be visible. The only exception is the player's own model."
    )

    const circle = new CursedPossession(
        "Summoning Circle",
        "The summoning circle can be used by lighting (default: F on keyboard) all five red candles with an igniter. Each candle deducts 16% sanity for nearby players, leading to a total of 80% being deducted for all candles. Once all five candles are lit, the ghost is summoned and fully materialized, except a Shade, which has a chance of appearing as a transparent shadow. The summoned ghost stays motionless for about 5 seconds, unable to kill players. This stationary period is considered a ghost event. However, the front door will lock immediately after lighting the last candle. After this \"grace period\", it immediately initiates a cursed hunt on the spot, without an additional 1 second grace period. Once the summoning circle is activated, it cannot be used again.",
        [
            "To prevent a hunt starting before the ghost can be summoned, use incense or place crucifixes near the ghost just before lighting the circle.",
            "Where needed, most Optional Objectives can be completed directly or indirectly using the summoning circle.",
            "Taking a photo of the centre of the circle will suffice, instead of attempting to have the entire circle in the photo."
        ]
    )

    const voodoo = new CursedPossession(
        "Voodoo Doll",
        "Interacting with the voodoo doll will cause one of the 10 pins stuck in the doll to be pushed into it at random. This will cause the ghost to perform an interaction, and will drop the user's sanity by 5%. These forced interactions can include evidence sources past EMF Level 5, such as making the ghost interact with Ghost Writing Books, create silhouettes in D.O.T.S. Projectors, and touch doors, windows, and light switches for Fingerprints. If the heart pin is pressed down the user's sanity will drain by 10%, and the ghost will initiate a cursed hunt. If the user's sanity is less than the amount that the pressed pin would drain, all remaining pins will be pushed in and a cursed hunt will occur.",
        [
            "The voodoo doll is best saved for after the favourite room has been found. Use it for the ghost to interact with evidence sources rather than waiting extended periods for the ghost to do it on its own."
        ]
    )

    const paw = new CursedPossession(
        "Monkey Paw",
        "The monkey paw grants wishes given by the user",
        [
            "The Monkey Paw is one of the most versatile cursed items in the game, and can assist players in the completion of most objectives, especially as players can control when and where to employ its effects in order to quickly reach safety.",
            "Note that the Monkey Paw is always active when held. Be careful when speaking while holding it, or you may accidentally call upon a wish even when you don’t have push to talk pressed.",
            "The vision loss from wishes is very significant, making it near impossible for a player afflicted by it to see more than a meter or so in front of them. While this can be partially circumvented by setting game brightness to a very high value, the affected player will be more or less rendered helpless and will need to be guarded accordingly.",
            "Audio muffling and vision loss afflictions are lost on death, and do not return when revived."
        ],
        new CursedPossessionInteractions(
            "Wishes", 
            [
                "I wish to see the ghost",
                "I wish for activity",
                "I wish the ghost would do something",
                "I wish to trap the ghost",
                "I wish the ghost was trapped",
                "I wish to be sane",
                "I wish for sanity",
                "I wish to be safe",
                "I wish to leave",
                "I wish to revive my friend",
                "I wish for life",
                "I wish for knowledge",
                "I wish for [weather]",
                "I wish for anything"
            ]
        )
    )


    return [ ouija, tarot, music, mirror, circle, voodoo, paw ]

}