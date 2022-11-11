import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import useWebSocket from "react-use-websocket";

const classNames = (...classes: (string | null | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const DraggableCard: React.FC<{ card: Card; index: number }> = ({
  card,
  index,
}) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => {
        return (
          <div
            className="p-1"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className={classNames(
                "h-32 w-32 bg-gray-300 rounded-sm flex items-center justify-center text-center bg-cover bg-center font-semibold",
                card.image && "text-white font-bold"
              )}
              style={{
                backgroundImage: card.image ? `url(${card.image})` : undefined,
                textShadow: card.image ? "0 2px 4px black" : undefined,
              }}
            >
              {card.name}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

const TierContainer: React.FC<{ id: string; cards: Card[] }> = ({
  id,
  cards,
}) => {
  return (
    <Droppable droppableId={id} direction="horizontal">
      {(dropProvided) => (
        <div
          ref={dropProvided.innerRef}
          className="flex-1 flex flex-row flex-wrap"
        >
          {cards.map((card, index) => (
            <DraggableCard card={card} index={index} key={card.id} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

type Card = {
  id: string;
  name: string;
  image?: string;
};

type Tier = {
  id: string;
  name: string;
};

type TierlistState = {
  [tier: string]: Card[];
};

const gradientColor = (i: number, steps: number) => {
  const degPerStep = 360 / steps / 2;
  const degForStep = Math.round(degPerStep * i);
  return `hsl(${degForStep}, 50%, 50%)`;
};

const Tierlist: React.FC<{
  id: string;
  cards: Card[];
  tiers: Tier[];
}> = ({ id, cards, tiers }) => {
  const [tierlistState, setTierlistState] = useState<TierlistState>({
    uncategorized: cards,
  });

  const update = (state: TierlistState) => {
    setTierlistState(state);
    sendMessage(JSON.stringify({ type: "UPDATE", state: state }));
  };

  const reset = () => {
    update({
      uncategorized: cards,
    });
  };

  const { sendMessage, readyState } = useWebSocket(
    `ws://${
      typeof location !== "undefined" ? location.hostname : "localhost"
    }:8787/tierlist/${id}`,
    {
      onMessage: ({ data }) => {
        const message = JSON.parse(data);

        if (Object.keys(message.state).length === 0) {
          sendMessage(JSON.stringify(tierlistState));
          return;
        }

        setTierlistState(message.state);
      },
    }
  );

  return (
    <DragDropContext
      onDragEnd={({ source, destination, draggableId }) => {
        const getNewState = (oldState: TierlistState) => {
          if (!destination) return oldState;

          const item = oldState[source.droppableId].find(
            (item) => item.id === draggableId
          );

          if (!item) return oldState;

          const newSource = (oldState[source.droppableId] || []).filter(
            (card) => card.id !== draggableId
          );
          const filteredDestination = (
            oldState[destination.droppableId] || []
          ).filter((card) => card.id !== draggableId);
          const destinationTier = oldState[destination.droppableId] || [];
          const newDestination = [
            ...filteredDestination.slice(0, destination.index),
            item,
            ...filteredDestination.slice(destination.index),
          ];

          return {
            ...oldState,
            [source.droppableId]: newSource,
            [destination.droppableId]: newDestination,
          };
        };

        const newState = getNewState(tierlistState);
        update(newState);
      }}
    >
      <div className="select-none">
        {tiers.map((tier, index) => {
          return (
            <div key={tier.name} className="flex bg-gray-800 min-h-[138px]">
              <div
                className="w-24 border border-black flex items-center justify-center text-xl font-semibold"
                style={{
                  backgroundColor: gradientColor(index, tiers.length),
                }}
              >
                {tier.name}
              </div>
              <div className="border border-black flex-1 flex">
                <TierContainer
                  id={tier.id}
                  cards={tierlistState[tier.id] || []}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col bg-gray-900 min-h-[200px] rounded-xl m-5 p-4">
        <TierContainer
          id="uncategorized"
          cards={tierlistState["uncategorized"] || []}
        />
      </div>

      <button
        type="button"
        className="bg-gray-700 text-white px-4 py-2 rounded-md m-3"
        onClick={reset}
      >
        Reset
      </button>
    </DragDropContext>
  );
};

export default Tierlist;
