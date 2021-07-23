import App from "@/components/layouts/index"

export default function Home() {
  return (
    <App>
      {
        new Array(4).fill("").map(s =>
            <div>tst</div>
          )
      }
    </App>
  );
}
