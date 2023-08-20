import Ghost from "../models/Ghost"
import Evidence from "../models/Evidence"

const {
    ORB, EMF, ULTRA, WRITING, FREEZING, DOTS, BOX
} = Evidence

export default (): Ghost[] => {

    const banshee: Ghost = new Ghost(
        'Banshee', 
        [ DOTS, ULTRA, ORB ], 
        [
            "Can produce a unique screech on the parabolic microphone", 
            "Performs melodic ghost events more often than other ghost types", 
            "Frequently roams to target player outside of hunts"
        ], 
        "Banshees will weaken their target before striking.", 
        "Banshees can sometimes be heard screaming with a parabolic microphone.", 
        [
            "Banshees will only check for the individual sanity level of the target player when attempting to hunt. If the ghost hunts above the average sanity of 50%, and one or more players are below 50% sanity, then one of them is the target. Likewise, if the ghost refrains from hunting at below 50% average sanity, but one player has high sanity, they can be presumed to be the Banshee's target.", 
            "Having players act as \"bait\" with smudge sticks and/or escape routes ready can definitively identify the target. Bait players should stand in plain sight and attempt to actively attract the ghost, such as talking into the microphone or holding active electronics; if the ghost ignores them, have another player repeat the process then proceed by elimination until the target is found. Alternatively, multiple players can do this at a time, standing separate from each-other and seeing which of them the Banshee rushes for. This method, though more risky, is useful either when the sanity-based method proves inconclusive, or when playing on Nightmare difficulty where the Sanity Monitor is not available. Ensure that all players are inside the building when performing this test.", 
            "Banshees tend to wander towards their target outside of hunts; a player reporting frequent activity or even hunts starting near them and far away from the ghost room is most likely the target."
        ],
        null
    )
    const demon: Ghost = new Ghost(
        'Demon', 
        [ ULTRA, FREEZING, WRITING ],
        [
            "Rare chance to hunt at any sanity percentage"
        ],
        "Demons will initiate hunts more often than other ghosts.",
        "Demons fear the Crucifix and will be less aggressive near one.",
        [
            "Generally, it is best to think of the Demon as having no hunt sanity threshold, even if its hunts are rarer above 70% average sanity.",
            "To identify a Demon via its traits, players may time the cooldown between hunts, or watch out for signs of a very early hunt. Given the Demon's relative aggressiveness in hunting, players should plan their route to the ghost room and what they wish to bring for any objectives, while considering whether to hide or to smudge the ghost if it hunts. Sprint may need to be conserved once approaching the ghost room in order to make a quick escape in the event of a sudden hunt.",
            "With the crucifix's increased effective range, preventing hunts will generally be easier, though difficulties may still be encountered in massive rooms, such as the Basketball Court of Brownstone High School.",
            "As the Demon has a much greater interaction range of 5 metres versus the usual 3 metres of other ghost types, it may mislead players away from the Ghost Room by causing interactions further away from where it is truly residing, particularly when it is roaming. This trait is exacerbated on small maps where there are many distinct rooms near each other, such as on 42 Edgefield Road. As such, it is best to be diligent in checking for if the correct Ghost Room has been found, such as by using the Thermometer."
        ],
        [
            "Time the hunt cooldown: a cooldown of less than 25 seconds (excluding hunts caused by cursed possessions) may indicate a Demon. If it uses a crucifix charge in this time, this may also be indicative of a Demon.",
            "Time the smudge hunt prevention: a ghost hunting between 60 - 90 seconds after being smudged correctly may indicate a Demon"
        ]
    )
    const deogen: Ghost = new Ghost(
        'Deogen', 
        [ BOX, WRITING, DOTS ],
        [
            "Can produce a unique response through the Spirit Box"
        ],
        "Deogens constantly sense the living. You can run but you can't hide.",
        "Deogens require a lot of energy to form and will move very slowly when approaching its victim.",
        [
            "If you have not ruled the Deogen out, it is best to choose a hiding spot which you can easily leave before the Deogen corners you, or have Smudge Sticks prepared. Once a Deogen is close enough to the player for its weakness to kick in, it becomes the slowest ghost in the game. Provided players do not accidentally trap themselves in a tight space with no way out, surviving a slowed Deogen is almost trivial as it is virtually impossible for it to catch up to its targets so long as they keep moving. In some cases, it may even be possible to skirt the ghost in a way that would normally be impossible with other ghosts, such as in the kitchen of 42 Edgefield Road. Looping the Deogen around a piece of furniture (e.g. a kitchen island) at a moderate speed is common practice.",
            "It is worth noting that when the Deogen is stunned with smudge sticks, it will maintain the speed at it was at when affected; in most cases, the Deogen will be moving at its minimum speed, meaning that the Deogen will only roam a very short distance before being able to chase players again.",
            "Keep server lag in mind; if you misjudge the ghost's server-side position and move away too late, it may kill you. Since the Deogen only switches targets periodically and not in real time, avoid having players stand behind each other to prevent the Deogen from rushing into another player to reach its target, because the Deogen can kill non-targets unlike the Banshee."
        ],
        [
            "The most straightforward form of identification is for the ghost to hunt; if it approaches the nearest player at high speeds and slows down drastically as it approaches, then it is a Deogen. Note that a \"young\" Thaye, a Revenant that has detected someone, and a Hantu when the power has been out for a while and room temperatures are at their lowest, may move at similar speeds, but without slowing down drastically (if at all); mistaking them for a Deogen can be deadly. A non-hunt way would be to constantly track the ghost and look for the signature heavy breathing through the spirit box, though this will be more tedious.",
            "The Deogen tends to provide Ghost Writing and D.O.T.S Projector evidences more readily, but this is not guaranteed and can be misjudged."
        ]
    )
    const goryo: Ghost = new Ghost(
        'Goryo', 
        [ DOTS, EMF, ULTRA ],
        [
            "A Goryo will only interact with a D.O.T.S Projector if no players are in the same room as the ghost. In addition, its D.O.T.S silhouette is only visible through a Video Camera, and cannot be seen with the naked eye. A Goryo will still manifest normally during ghost events and hunts with its ghost model, which does not require any special equipment to be seen."
        ],
        "A Goryo will usually only show itself on camera if there are no people nearby.",
        "They are rarely seen far from their place of death.",
        null,
        [
            "It is necessary to have a Video Camera either placed facing an active D.O.T.S. Projector, or held by a player outside the ghost's room. If D.O.T.S. evidence is visible in the camera's screen, but invisible in direct view, the ghost is likely to be a Goryo. Conversely, if D.O.T.S. is seen without the aid of a video camera, a Goryo can be safely ruled out. Turning up device or in-game brightness may help when trying to rule out a Goryo.",
            "The Goryo's D.O.T.S mechanic only checks if a player is in the ghost's current room, and not where the D.O.T.S Projector is. In addition, the interaction radius for D.O.T.S specifically is 7 metres, which means that the Goryo can produce a D.O.T.S silhouette while standing in another room if within range, even if a player is in the room where the projector is.",
            "Ghost events only need the player to be somewhat near the ghost, and the ghost does not need to roam to perform them, only teleporting if applicable. Hence, having ghost events happening a distance away from the favourite room does not rule out the Goryo.",
            "If you do not obtain D.O.T.S Projector as one of the ghost's two evidences on Nightmare difficulty or on a limited evidence custom game (1/2 evidence), then the Goryo can be safely ruled out. As the Goryo cannot show up through D.O.T.S on a 0 evidence run, the ghost will be very hard to identify with certainty. Try waiting a while to see if the ghost changes its favourite room at low sanity, or use motion sensors and salt to track how far it travels in one go."
        ]
    )
    const hantu: Ghost = new Ghost(
        'Hantu', 
        [ ULTRA, FREEZING, ORB ],
        [
            "Can emit frosty breath when hunting with the breaker off"
        ],
        "Moves quicker in colder areas during hunts",
        "Moves slower in warmer areas during hunts",
        [
            "Turning off the location's breaker will prevent the Jinn from using any of its abilities. However, this will render the map's electrical lights inactive, leading to players' sanity draining as a consequence of being in the dark more often. Players will need to decide if preventing the Jinn from using its abilities is worth dealing with more frequent hunts as a result of lower average sanity, though this loss can be mitigated by holding lit candles to prevent passive sanity drain."
        ],
        [
            "Leave the breaker turned on for a while, then listen for its speed during a hunt. If it is faster in colder rooms (usually, but not always the favourite room), and slower than a normal ghost in a warm room, then it is a Hantu.",
            "If it is a Raiju, then the ghost will be fast near active electronics and a normal speed outside a specified range. If this is a no-evidence game, try removing all electronics first. If at least one piece of evidence is provided, then having Freezing Temperatures as a piece of evidence will eliminate Raiju.",
            "The Moroi can also speed up over several hunts, but as a result of gradually lowering average sanity instead. Ensure that all players maintain their sanities at a constant level.",
            "Leave the breaker turned on for a while, then loop it around a large piece of furniture in a warm room during a hunt, carrying Smudge Sticks to avoid death. If the ghost does not speed up quickly with line-of-sight (within ~10 seconds), then it is likely a Hantu.",
            "The Hantu's ability to emit freezing breath when the breaker is off can be used to definitively identify it without evidence, though it is more risky than the above strategies. Look closely! Use Smudge Sticks to blind it while it's hunting.",
            "If you do not obtain Freezing Temperatures as one of the ghost's evidences on a limited evidence custom game (1/2 evidence), then the Hantu can be safely ruled out.",
            "The Hantu is one of two ghosts (the other being the Onryo) for which you can collect all three pieces of evidence without excluding The Mimic. Therefore, before concluding you're dealing with a Hantu, check whether the Spirit Box gives audio. If it does, you have The Mimic."
        ]
    )
    const jinn: Ghost = new Ghost(
        'Jinn', 
        [ EMF, ULTRA, FREEZING ],
        [
            "Occasionally attempts to zap the sanity of nearby players"
        ],
        "Gets a speed boost when chasing a player that is far away",
        "Cannot use any of its abilities when the fuse box is off, and cannot turn the fuse box off",
        [
            "urning off the location's breaker will prevent the Jinn from using any of its abilities. However, this will render the map's electrical lights inactive, leading to players' sanity draining as a consequence of being in the dark more often. Players will need to decide if preventing the Jinn from using its abilities is worth dealing with more frequent hunts as a result of lower average sanity, though this loss can be mitigated by holding lit candles to prevent passive sanity drain."
        ],
        [
            "Wait for a hunt at the end of a long room or corridor, standing far away from where the ghost is expected to enter the room, and with line-of-sight all the way through. Listen for its footsteps and observe its speed before and after it sees the player. If it instantly gains speed to chase the player, then it is likely a Jinn; use a smudge stick if needed. The Jinn will also slow down once it gets within 3 meters of its target, but be wary as testing this can be very risky.",
            "Leave an EMF reader at the fuse box; if it picks up a reading but the fuse box never turned on/off, then it is very likely the Jinn using its ability, barring any other items that could have caused the reading (such as the fuse box door itself)."
        ]
    )
    const mare: Ghost = new Ghost(
        'Mare', 
        [ ORB, WRITING, BOX ],
        [
            "Turns off lights and breaks lightbulbs more often",
            "May turn off a light immediately after a player turns one on",
            "Chooses unlit rooms to remain in more often"
        ],
        "Hunts at a higher sanity threshold in an unlit room",
        "Hunts at a lower sanity threshold in a lit room",
        [
            "Players should be cautious when using the Spirit Box or looking for Ghost Orbs to verify the ghost's current location or favourite room, as the Mare is more likely to hunt when the lights in its room are off, potentially catching players dangerously close to the Mare when it begins to hunt. ",
            "Leave the lights in its favourite room and neighbouring rooms turned on. This will lower its hunt sanity threshold.",
            "Once the sanity threshold is below 40%, the Mare will be able to hunt regardless of whether the lights are on or not. Hence, it may be wise to leave the lights in its favourite room turned off. This way, the Mare is less likely to wander away, and will be more likely to hunt in that room, making it less dangerous than a case where the Mare is constantly roaming into other rooms (and possibly changing its favourite room)."
        ],
        [
            "The ability to turn a light back off the moment a player turns it on - try to pause a few seconds between turning the lights on",
            "A preference for light-shattering ghost events",
            "A ghost that hunts slightly earlier in the dark or slightly later in the light, though this is not very reliable",
            "If you tend to keep the lights near the ghost turned on, and you find the ghost frequently wandering into dark rooms that players have not entered, and changing favourite rooms frequently on Professional and Nightmare difficulties, then the ghost could be a Mare"
        ]
    )
    const moroi: Ghost = new Ghost(
        'Moroi', 
        [ BOX, WRITING, FREEZING ],
        [
            "Can curse players through the spirit box or the parabolic microphone, making them lose sanity faster"
        ],
        "Hunting speeds depend directly on average team sanity",
        "Will be disoriented for longer when smudged during a hunt",
        [
            "Given the Moroi's ability to drain sanity after responding through the spirit box, it is recommended to refrain from utilizing the Spirit Box after obtaining the first response. If necessary, only the player who previously asked questions should use the spirit box again. Where needed, timely intervention in the form of sanity pills can be used to break the curse. "
        ],
        [
            "Listen for the ghost's speed both over multiple hunts and during a given hunt, as average sanity lowers; a ghost that speeds up over the course of multiple hunts as average sanity lowers, or gradually speeds up during wandering when all players are hiding, could be a Moroi. Remember to take into account line-of-sight acceleration, if applicable. Note that the Hantu will increase in speed if the fuse box is left off as the temperature in the map decreases, but it does not speed up through line-of-sight; keep the fuse box turned on to avoid misidentification.",
            "As an alternate strategy, sanity pills can be utilized during a hunt. As the Moroi's roaming speed changes in real time as average sanity changes, a significant increase of it while it's hunting will cause the Moroi to slow down, potentially identifying it in the span of a single hunt, while also potentially bolstering sanity enough to get the team above hunt range afterwards. All players should be hidden (or, most optimally, having been hidden from the start) to avoid the speed loss being confused for a ghost's deceleration from line-of-sight or the Revenant's losing track of players, and to wait a few seconds in order to get a read on its roaming speed before using the pills to note a difference. Additionally, a marked degree of coordination in multiplayer is required, as multiple uses will be needed to raise average sanity enough to cause the Moroi to lose a definitive amount of speed."
        ]
    )
    const myling: Ghost = new Ghost(
        'Myling', 
        [ EMF, ULTRA, WRITING ],
        [
            "The Myling produces paranormal sounds (that can only be heard through a Parabolic Microphone) more often than other ghosts."
        ],
        "Has quieter footsteps and vocalizations during hunts",
        "Produces paranormal sounds more frequently",
        [
            "Players can hear an idle ghost's paranormal sounds (voices, growls, etc.) only through a Parabolic Microphone. Frequent paranormal sounds may indicate that the ghost is a Myling. "
        ],
        [
            "The ghost must be on the same floor.",
            "If footsteps and ghost vocalisations are audible only when your electrical equipment starts flickering, the ghost is probably a Myling.",
            "Note that there may be an occasional bug where the ghost temporarily does not flicker electronics on the correct floor when changing floors."
        ]
    )
    const obake: Ghost = new Ghost(
        'Obake', 
        [ EMF, ULTRA, ORB ],
        [
            "Has a chance to blink in a different ghost model when hunting"
        ],
        "Fingerprints can disappear faster than usual, or can sometimes not appear",
        "Can leave a unique fingerprint pattern",
        [
            "If the ghost touches a surface and leaves no fingerprints, then later leaves fingerprints on another surface, or vice versa, this usually points to the ghost being an Obake.",
            "If an Obake is suspected, checking a touched surface with a UV Flashlight or Glowstick each time it interacts with a door or the like is prudent to spotting the Obake's special fingerprints, both to maximize the chances of spotting them and to note any instances of them rapidly disappearing. Note that getting normal fingerprints, even several times repeatedly, does not rule out an Obake outright." 
        ]
    )
    const oni: Ghost = new Ghost(
        'Oni', 
        [ DOTS, EMF, FREEZING ],
        [
            "On average, the Oni is more active, interacting with objects more often, especially when there are people in the ghost room. "
        ],
        "More active when people are nearby",
        "Cannot produce \"airball\" ghost events, and model remains visible for longer periods during a hunt",
        [
            "With increased activity in general, the Oni may more readily give up evidence to players, which can make for generous and swift investigations if an Oni is quick to reveal the necessary evidence.",
            "Since the Oni cannot perform the airball ghost event, an Oni can be ruled out if the ghost performs such an event. It must be emphasised that the Oni can hiss as part of a chasing event. A way to differentiate the chasing event is that you will hear the (random) ghost vocalisation and footsteps, and doors in the room will usually close (if any). Also, there are four hiss sounds that an airball event cannot do; only one hiss sound is shared by airball and chasing events.",
            "While not a particularly aggressive ghost, as the Oni is more likely to trigger ghost events against hunters, it may more rapidly bring the team down to hunt sanity threshold, especially when factoring in its doubled sanity reduction when colliding with players during ghost events. Depending on the circumstances, Sanity Pills can be used to counteract this loss, or defensive items like Smudge Sticks can be brought in sooner."
        ]
    )
    const onryo: Ghost = new Ghost(
        'Onryo', 
        [ FREEZING, ORB, BOX ],
        [
            "If a player is currently dead, the Onryo will blow out sources of flame (lit firelight, igniter, or campfire) at a higher frequency. More dead players increases this frequency. It will blow out flames at the same frequency as other ghosts if no players are dead.",
            "Under 60% average sanity, it will blow flames out more often but only because it is attempting to hunt."
        ],
        "Chance to hunt at any sanity after blowing out a flame, and blows out fiery objects (candles, campfire) more often with more dead people",
        "Presence of flames prevents the ghost from hunting",
        [
            "The Onryo's aversion to fire, while a powerful tool against it, does come with risks of its own. However, with sufficient firelights and diligent relighting of them whenever they're extinguished, the Onryo may be kept from hunting indefinitely, which may also serve as identification for the ghost on reduced evidences difficulties. On the other hand, only having one lit firelight within range of it increases the risk of it hunting as a result of blowing it out if said firelight is being re-lit, or other flame sources are being activated nearby. The latter is even riskier if one or more players have died, as the Onryo will blow out firelights in increasing frequency. Players should consider whether having flames lit near the ghost is worth it to prevent hunts, or if they should be disregarded outright and simply play around the Onryo's heightened hunt threshold."
        ],
        [
            "Place one crucifix in the ghost's area, then a firelight directly on top.",
            "Place two crucifixes in the ghost's area, then multiple firelights spread out and covering the crucifixes' ranges.",
            "If the crucifix is activated without the firelights going out first, then it is not an Onryo.",
            "If the ghost seems to not hunt with multiple firelights active, or hunts in an area where no firelights are lit, then it may be an Onryo."
        ]
    )
    const phantom: Ghost = new Ghost(
        'Phantom', 
        [ DOTS, ULTRA, BOX ],
        [
            "Occasionally roams to a random player"
        ],
        "Seeing the ghost nearby during manifestations and hunts drains more sanity",
        "Taking a picture of the Phantom renders it temporarily invisible, and remains invisible for longer periods when hunting",
        null,
        [
            "A good way to identify a Phantom is to observe whether the ghost is invisible for longer intervals on average during hunts (more than 1 second); this will usually indicate a Phantom.",
            "Taking a photo of a Phantom during a ghost event is also a fair indicator. The main identifier is the ghost disappearing from view, but its vocalisations can still be heard. Additionally, the photo will be labelled as Ghost, but the Phantom will not be visible in the photo, and there will be no interference pattern on the photo.",
            "The Phantom's sanity-draining ability could be used to identify it, though this is rarely the main strategy used, as the player must discern normal sanity drain due to darkness/other factors, from the actual sanity drain caused by a Phantom. "
        ]
    )
    const poltergeist: Ghost = new Ghost(
        'Poltergiest', 
        [ ULTRA, WRITING, BOX ],
        [
            "Can throw multiple objects at once",
            "Can throw a single object farther than other types"
        ],
        "Sanity decrease stacks up during multithrow interactions",
        "Ineffective in empty rooms with no throwables",
        null,
        [
            "Taking advantage of the Poltergeist's abilities, one can scatter multiple objects around in its room. If one object is seen being flung with force across the room, or multiple objects are thrown at once, then it is probably a Poltergeist. Note that there is some overlap of how hard regular ghosts can throw and how hard a Poltergeist can throw; this trait is harder to discern in small rooms.",
            "It is generally better to build multiple small piles spread out rather than one large pile; if the Poltergeist is not near the pile, it will not affect the pile at all.",
            "It's important to be prudent when suspecting a Poltergeist, and not simply immediately guess it from inconclusive behavior; while it is generally quite active in regards to constantly throwing items, the largely random nature of interactions can cause other ghosts to toss items frequently, matching the activity levels of the Poltergeist at times, especially with more active ghost types like the Oni and Thaye. Likewise, low activity should also not discount the possibility of a Poltergeist.",
            "Remember to turn off the lights to increase activity."
        ]
    )
    const raiju: Ghost = new Ghost(
        'Raiju', 
        [ DOTS, EMF, ORB ],
        [
            "When a Raiju manifests during a ghost event or a hunt, it will interfere with electronics that are up to 15 metres away on the same floor, instead of the usual 10 metres."
        ],
        "Active electronics boost its speed during hunts",
        "Disrupts electronics from further away when manifesting",
        [
            "In order to mitigate the risk of an early hunt, it is best to turn off and/or remove any unneeded electronic equipment from the ghost room; this also prevents the Raiju from harnessing this equipment to empower itself while hunting. Lazily discarding such equipment is a reliable way to make a Raiju extremely dangerous. Additionally, players often have the reflex of discarding electronic items behind them when a hunt starts to not attract the ghost's attention to them; this should be avoided with Raijus to not leave a trail of electronic equipment to power his speed ability. Instead, players should either switch to a non-electronic item or an electronic item that can be turned off.",
            "The Raiju may be readily-identified by being mindful of its speed during a hunt, particularly on small maps, so long as there are active electronic items nearby. If the ghost continues to walk very quickly when roaming (and not chasing particular players), then it is most likely a Raiju. "
        ]
    )
    const revenant: Ghost = new Ghost(
        'Revenant', 
        [ FREEZING, ORB, WRITING ],
        [
            "Revenants have very noticeable speed change between roaming and chasing modes. When a Revenant is roaming, it will move at 1 m/s. However, as soon as it detects a player (either visually or through speech/electronics), it will begin to move at 3 m/s (nearly twice the base speed of most other ghosts) and sustains this speed until it reaches the spot where it last detected a player. If and when reverting to roaming mode, the Revenant's speed will slowly decrease over ~2.7 seconds (deceleration rate of 0.75 m/s²) back to its initial value of 1 m/s."
        ],
        "Significant speed increase when chasing a player during hunts",
        "Roaming speed remains low or drop over time when no player is detected",
        [
            "Due to the Revenant's power, it is critical to hide as soon as possible and the player must exercise extreme caution as to not give away their position during a hunt. A player will not be able to outrun a Revenant for long before it catches up to them. If you are caught running from a Revenant, your last resort is to use Smudge Sticks to ward it off for a few seconds, giving you enough time to hide from it.",
            "While hiding, listen for the ghost's footsteps; if the footsteps are relatively few and far between while the ghost is nearby, then it is most likely a Revenant. On multiplayer, the Revenant will perform an immediate area search just like any other ghost during hunts. However, it will take a longer time due to its slow movement speed while roaming, so wary players can easily identify it."
        ]
    )
    const shade: Ghost = new Ghost(
        'Shade', 
        [ EMF, FREEZING, WRITING ],
        [
            "Produces hissing and shadowy form ghost events more often"
        ],
        "Harder to find due to it being generally less active",
        "Has a low hunt sanity threshold, and is generally unwilling to hunt and perform interactions in the presence of players",
        [
            "Due to the Shade's aforementioned shyness, the lack of interactions may give it away, or players may become frustrated at the ghost not producing evidence. Try keeping everyone out of the ghost room, as well as using smudge sticks or specific cursed possessions that will increase the chance of the ghost interacting with the environment. Turning off the lights in the ghost's room may also help.",
            "Given the Shade's inability to hunt in a room with players, one can be tested for in Nightmare difficulty simply by lowering the average sanity close to zero, and having players stand in the ghost's current room and rooms directly adjacent. If it refuses to hunt or hunts only from a room without players, then it may be a Shade.",
            "In singleplayer on Nightmare difficulty, one way to identify a Shade is to drop the average sanity to zero, before using two sanity pills to restore the player's sanity to 50%, then allowing a small drop of sanity for a few seconds within the investigation area before stopping it via candles or room lights (ideally hiding far away or on a different floor to prevent witnessing ghost events that may drain sanity). A ghost that refuses to hunt at this sanity may indicate that the ghost is a Shade.",
            "The Shade appearing as a shadow in the summoning circle is not guaranteed, so seeing a full manifestation with it does not rule out a Shade. "
        ]        
    ) 
    const spirit: Ghost = new Ghost(
        'Spirit', 
        [ EMF, FREEZING, WRITING ],
        [
            "No special abilites"
        ],
        "No strengths",
        "Lit smudge sticks double the hunt cooldown",
        [
            "With no special powers, and a harsher reaction to Smudge Sticks, Spirits serve as a baseline to measure other ghosts against. With their behavior not being especially unique amongst the ghosts, this lack of defining traits that can confuse investigators; therefore, unless clear evidence is established, a Spirit can be easily mistaken for another entity.",
            "The main (and usually only) way to test for a Spirit without using evidences is to lower the average sanity to below 50%, and smudge the ghost while it is not hunting; if it hunts before the three minutes is up, it is not a Spirit. If it hunts only after three minutes, it is very likely (though not conclusively) a Spirit. Note that if it hunts within the first minute of the smudge stick being used, then the smudge stick did not work, and the player should attempt to smudge it again. In Nightmare difficulty, players should wait for a hunt or a burnt crucifix to confirm that the average sanity is low enough. "
        ]
    )
    const thaye: Ghost = new Ghost(
        'Thaye', 
        [ ORB, WRITING, DOTS ],
        [   
            "The Thaye has an internal \"age\" parameter that affects its general activity. Every 1 to 2 minutes, the Thaye attempts to age; if at least one player is in the same room as the ghost, the Thaye will add 1 to its age, else it will wait another 30 seconds before attempting to age again. The following shows the parameters that are affected by age"
        ],
        "Becomes very active the first time a player gets nearby",
        "The more time players spend near it, the quieter and slower it becomes",
        [
            "With a Thaye, both interactions and events will be more frequent from the start of the investigation, which may make it easier to locate the ghost. On the other hand, if players do not locate the ghost quickly, especially on large maps, the Thaye may prove to be one of the most dangerous ghosts in the game, as its initial hunt sanity threshold is higher than that of a Demon's, and it is much faster when chasing players during these early hunts. Due to the extreme danger it can pose towards the beginning of a contract, identifying hiding spot locations as soon as possible is very prudent.",
            "With a Thaye, both interactions and events will be more frequent from the start of the investigation, which may make it easier to locate the ghost. On the other hand, if players do not locate the ghost quickly, especially on large maps, the Thaye may prove to be one of the most dangerous ghosts in the game, as its initial hunt sanity threshold is higher than that of a Demon's, and it is much faster when chasing players during these early hunts. Due to the extreme danger it can pose towards the beginning of a contract, identifying hiding spot locations as soon as possible is very prudent.",
            "One could identify a Thaye through its hunting behaviour; if it is fast early in the contract, slows down over several hunts as players continue spending time near it, and does not gain speed with line-of-sight, then a Thaye is likely. Likewise, if the ghost hunts early and has high levels of activity, but becomes less willing to hunt, interact, or perform ghost events over time, this could also point to a Thaye.",
            "Because ghost events and interactions are more common early on, one should use this opportunity to complete any objectives or fill the journal with photos. Taking the hunt sanity threshold into consideration, if one is careful with how they interact with the ghost, a (near-)perfect contract can be achieved easily. However, if players spend excessive time in the ghost room and cause the Thaye to age quickly, and are not careful with their cursed possession usage to compensate for the loss in activity, completing objectives and obtaining photo evidence could become an annoying (or boring) task."
        ]
    )
    const mimic: Ghost = new Ghost(
        'The Mimic', 
        [ BOX, ULTRA, FREEZING, ORB ],
        [
            "The Mimic is able to imitate any type of ghost, and inherit all of its features and abilities",
            "The Mimic will change the ghost type that it chooses to imitate every 30 seconds to 2 minutes, but cannot change during hunts."
        ],
        "Mimics other ghost types one after another for brief periods of time",
        "Will always produce false ghost orbs",
        [
            "The Mimic's fundamental nature means that it is unpredictable: it can theoretically have the powers of almost any ghost type at any time, most notably ghost abilities that could enable early hunts. The absolute safest way to handle a Mimic is to treat it as if it had every potential modifier that could increase its aggression, and make sure to utilize if not all, then at least a few tactics that would be used to dissuade attacks from other ghost types",
            "Additionally, it is prudent to have Smudge Sticks handy, as The Mimic may imitate fast ghosts such as the Revenant or Thaye, or most dangerously imitate the Deogen and require hunters to completely change up their strategy from hiding to looping between hunts, potentially after everyone is already situated at a hiding spot.",
            "The presence of Ghost Orbs with The Mimic means that players have to take care when trying to identify the ghost with three pieces of evidence, including Ghost Orbs, if there is a potential overlap between The Mimic and another ghost. For example, identifying Fingerprints, Ghost Orbs, and Freezing Temperatures usually indicates a Hantu, but as The Mimic creates orbs, Spirit Box evidence has to be definitively ruled out before a Hantu can be confirmed. Players should go further in confirming or eliminating the presence of a fourth evidence. However, on reduced evidence difficulties, this can cause The Mimic to be very simple to identify, as The Mimic always produces these orbs, and will appear to go over the set maximum amount of given types of evidence.",
            ""
        ]
    )
    const twins: Ghost = new Ghost(
        'The Twins', 
        [ EMF, FREEZING, BOX ],
        [
            "Differing speeds depending on which twin hunts"
        ],
        "Can hunt from a different place than expected",
        "Can interact with the environment simultaneously",
        [
            "The Twin's primary strength is its ability to misdirect: its core ability can very easily conjure red herring interactions at parts of the map far from the Ghost Room where it would give evidence, misleading hunters and delaying their efforts to identify it. This can be be especially troublesome on larger maps like Sunny Meadows Mental Institution when trying to locate the Ghost Room. However, these misleading interactions can be used against it: as the ghost is not physically in the room where these long-ranged interactions occur, evidence past EMF Level 5 cannot be obtained in the area. Using a thermometer and noting a lack of Freezing Temperatures (or, at the very least, notable temperature drops) where ghost activity is noted, or failing to receive Spirit Box responses in rooms near where interactions occurred, are strong signs of the antics of The Twins trying to cause trouble.",
            "Noticing a subtle change in base speed from one hunt to another might indicate that the player is dealing with The Twins. Be sure to avoid confounding factors such as line-of-sight acceleration, or a few other ghosts which may also change base speeds between hunts.",
            "Due to The Twins having two possibilities in regards to angles of attack for any given hunt, it is recommended to plan for the event that The Twins approaches from a planned escape route, such as through use of Smudge Sticks."
        ]
    )
    const wraith: Ghost = new Ghost(
        'Wraith', 
        [ DOTS, EMF, BOX ],
        [
            "Can teleport to a random player, becoming active near them, outside of ghost events and hunts"
        ],
        " Wraiths almost never touch the ground, meaning it can't be tracked by footsteps.",
        "Never steps in salt",
        [
            "The Wraith will never step in or disturb a salt pile. If you've had undisturbed salt in the ghost's room for a prolonged period of time, then it could be a Wraith.",
            "Placing salt in the center of the Summoning Circle and then summoning the ghost is a good way to spot a Wraith."
        ]
    )
    const yokai: Ghost = new Ghost(
        'Yokai', 
        [ DOTS, BOX, ORB ],
        [
            "Talking near it will increase its chance of hunting and interaction rate"
        ],
        "Talking near a Yokai will anger it, increasing the chance of an attack.",
        "Can only hear voices and detect electronics within a short range",
        [
            "The Yokai is identifiable through two distinctive traits: it will hunt more often when players are together and talking near it, but its ability to detect hidden players during a hunt through voice or electronics will be limited. For example, it will be less likely to follow the player past multiple line-of-sight breaks, and will not be attracted to held electronics unless the Yokai is already very close to the holder.",
            "Although its 80% hunt threshold is theoretically the highest in the game, greater than that of the Demon and the youngest Thaye, in practice, these extremely early hunts are rare. The Yokai does not have any additional buffs when hunting, so escaping it will be generally easier.",
            "To test for a Yokai during a hunt, stand at a distance close enough to where the ghost is currently at that is outside of the ghost's immediate line of sight, preferably near a hiding spot, and then turn on an electronic device and/or begin speaking in voice chat. If the ghost does not seek out the player making this noise, especially if it causes disruption of the device and then passes by instead of homing in, then it is likely a Yokai. Note that the electronic disruption range is a little bit greater than the actual range in which most ghosts will actually sense the held device.",
            "The Monkey Paw's wish to unblock a hiding spot will cause the ghost to be able to hear the speech and held electronics of the player who used it from any distance, overriding the Yokai's weakness. This may make trying to test a Yokai from its trait much more difficult, and when playing singleplayer, outright impossible.",
            "In multiplayer, the Yokai becomes mildly more dangerous, as there are more players that could be talking near the Yokai at any given moment, and thus can elevate its hunt sanity threshold more often. Where possible, less experienced players should ideally keep voice communications as short as possible until the ghost room is found. Otherwise, completing objectives can be made easier by encouraging the Yokai to hunt through talking."
        ]
    )
    const yurei: Ghost = new Ghost(
        'Yurei', 
        [ ORB, FREEZING, DOTS ],
        [
            "May randomly shut a door and deduct nearby players' sanity"
        ],
        "Yureis have been known to have a stronger effect on people sanity.",
        "Will be temporarily confined to its room after smudging",
        [
            "Generally, keeping doors wide open near the ghost will help one to observe when the Yurei uses its ability.",
            "If the ghost shuts a front door (exit door) fully without a ghost event or hunt, then it is definitely a Yurei.",
            "If the ghost shuts any other door fully, then it is likely (but not definitely) a Yurei.",
            "The Yurei ability does not involve opening doors, only closing."
        ]
    )

    return [ 
        spirit, wraith, phantom, poltergeist, banshee, jinn, 
        mare, revenant, shade, demon, yurei, oni, yokai, 
        hantu, goryo, myling, onryo, twins, raiju, obake,
        mimic, moroi, deogen, thaye
    ]

}