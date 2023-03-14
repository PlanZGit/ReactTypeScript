# Hooks

## useState

LoggedIn.tsx works without any typescript, but still use typing to check is value is of same type.

## useState Future Value

Set the initial type and future type.

- user can be type null or AuthUser
- user?.name always has to check if it exist

User.tsx

    type AuthUser = {
      name: string;
      email: string;
    };

    const [user, setUser] = useState<AuthUser | null>(null);

    <div>User name is{user?.name}</div>

## useState Type Assertion

We can use Type Assertion to let User to always be type AuthUser.

- If we know that user will be initialize soon after setup, and will always has a value, it is better to use Type Assertion, else use possible types
- This will let us access name without name or email without a check

User.tsx

    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    <div>User name is{user.name}</div>
