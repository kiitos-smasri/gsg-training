/**
 *
 * Make it so that clicking the “Search” button puts focus into the field.
 * Note that each component is defined in a separate file and shouldn’t be moved out of it.
 * How do you connect them together?
 */
export function SearchButton() {
  return <button>Search</button>;
}

export function SearchInput() {
  return <input placeholder="Looking for something?" />;
}

export default function Page() {
  return (
    <>
      <nav>
        <SearchButton />
      </nav>
      <SearchInput />
    </>
  );
}
