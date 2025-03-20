/* eslint-disable react/prop-types */
import { LevelContext } from "./LevelContext";

export default function Section({ level, children }) {


  return (
    <section className="section" style={{ border: "1px solid black" }}>
      <LevelContext value={level}>
        {children}
      </LevelContext>
    </section>
  );
}
