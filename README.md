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

Status.tsx - **Union of string literals as the status type**

    type StatusProps = {
    status: "loading" | "success" | "error";
    };

Heading.tsx - **Children props**

    //App.tsx
    <Heading>Placeholder text</Heading>

    //Heading.tsx
    type HeadingProps = {
      children: string;
    };

    function Heading(props: HeadingProps) {
      return <div>{props.children}</div>;
    }

Oscar.tsx - **Children props where type is React.ReactNode**

    //App.tsx
      <Oscar>
        <Heading>Oscar foes to ...... </Heading>
      </Oscar>

    //Oscar.tsx
    type OscarProps = {
      children: React.ReactNode;
    };

    function Oscar(props: OscarProps) {
      return <div>{props.children}</div>;
    }

Greet.tsx - **Optional props**

    //if messageCount was not included

    App.tsx
    <Greet name="Vishwas" isLoggedIn={false} />

    Greet.tsx
    type GreetProps = {
      name: string;
      messageCount?: number;  //Becomes optional
      isLoggedIn: boolean;
    };

    //Consider destructuring, set to zero by default
    const { messageCount = 0 } = props; ////Becomes optional

## Event Props

Button.tsx

    //App.tsx
    <Button
      handleClick={(event, id) => {
        console.log("Button clicked", event, id);
      }}
    />

    //Button.tsx
    type ButtonProps = {
      handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
    };

    export const Button = (props: ButtonProps) => {
      return (
        <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
      );
    };

Input.tsx

    //App.tsx
    <Input value="" handleChange={(event) => console.log(event)} />

    //Input.tsx
    type InputProps = {
      value: string;
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };

    function Input(props: InputProps) {
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
      };

      return (
        <input type="text" value={props.value} onChange={handleInputChange}></input>
      );
    }

## Style Props

Container.tsx

    //App.tsx
    <Container styles={{ border: "2px solid black", padding: "1rem" }} />

    //Container.tsx
    type ContainerProps = {
      styles: React.CSSProperties;
    };

    function Container(props: ContainerProps) {
      return <div style={props.styles}>Container</div>;
    }
