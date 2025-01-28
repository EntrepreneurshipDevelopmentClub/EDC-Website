import { EventCard } from ".";
import eventData from "./eventCards/eventData";

export default function CompletedEvents() {
    const completedEvents = eventData.filter(
        (event) => event.completed === true
    );

    return (
        <section>
            <h2>PAST <span>EVENTS</span></h2>
            {completedEvents.map((eventCardData, id) => (
                <EventCard key={id} {...eventCardData} />
            ))}
        </section>
    );
}
