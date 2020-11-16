import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Default Settings</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with default settings"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2>Loading = eager</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with loading set to eager"
          width={300}
          height={300}
          loading="eager"
        />
      </div>
      <div>
        <h2>Priority = true</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with priority set to true"
          width={300}
          height={300}
          priority
        />
      </div>
      <div>
        <h2>Priority = true and Loading = eager</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with loading set to eager and priority set to true"
          width={300}
          height={300}
          loading="eager"
          priority
        />
      </div>
      <div>
        <h2>Unoptimized = true</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with unoptimized set to true"
          width={300}
          height={300}
          unoptimized
        />
      </div>
      <div>
        <h2>Unoptimized = true and Loading = eager</h2>
        <Image
          src="/image.png"
          alt="Placeholder image with unoptimized set to true and loading set to eager"
          width={300}
          height={300}
          unoptimized
          loading="eager"
        />
      </div>
    </main>
  );
}
