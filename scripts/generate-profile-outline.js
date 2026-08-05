const fs = require("fs");

const svg = fs.readFileSync("public/me.svg", "utf8");

const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
const pathMatch = svg.match(/<path[^>]*\sd="([^"]+)"/s);

if (!pathMatch) {
    throw new Error("Path not found");
}

const path = pathMatch[1];

if (!viewBox || !path) {
  throw new Error("Could not extract viewBox or path from me.svg");
}

const component = `export default function ProfileOutline() {
  return (
    <svg
      viewBox="${viewBox}"
      className="absolute inset-0 w-full h-full pointer-events-none"
      fill="none"
    >
      <path
        d="${path}"
        className="snake-border"
      />
    </svg>
  );
}
`;

fs.writeFileSync("components/ProfileOutline.tsx", component);

console.log("✅ ProfileOutline.tsx generated!");