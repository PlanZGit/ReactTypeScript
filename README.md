# ReactTypeScript

Read introduction [Intro.md](./Intro.md) on the why and what.

# Getting Started

## install react with typescript

    npx create-react-app my-app --template typescript

# Typing Props

Use type when building application and interfaces when building library

Greet.tsx

    type GreetProps = {
      name: string;
      messageCount: number;
      isLoggedIn: boolean;
    };

    function Greet(props: GreetProps) {
      return (
        <div>
          <h2>
            {props.isLoggedIn
              ? `Welcome ${props.name}! You ahave ${props.messageCount} unread messages`
              : "Welcome Guest"}
          </h2>
        </div>
      );
    }

## Basic Props

Typing a **Object** prop Person.tsx

    type PersonProps = {
      name: {
        first: string;
        last: string;
      };
    };

    {props.name.first} {props.name.last}

Typing a **Array Object** prop PersonList.tsx

    type PersonListProps = {
      names: {
        first: string;
        last: string;
      }[];
    };

## Advanced Props
