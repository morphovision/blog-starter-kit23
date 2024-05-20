import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Morpho.
      </h1>
      <div className="flex">
        <a style={{ marginRight: '.9em' }} href="https://objkt.com/@morpho" rel="history">
          <img className="text-color" style={{ width: '68px', opacity: 1 }} src="/assets/blog/twitter/objkt2.png" />
        </a>
        <a style={{ marginRight: '.5em', }} href="https://www.instagram.com/morpho.gen/" rel="history">
          <img className="text-color" style={{ width: '37px', opacity: 1 }} src="/assets/blog/twitter/insta.png" />
        </a>
        <a style={{ marginRight: '.5em' }} href="https://twitter.com/morpho_genesis" rel="history">
          <img className="text-color" style={{ width: '48px', opacity: 1 }} src="/assets/blog/twitter/twitter2.png" />
        </a>
        <a style={{ marginRight: '.5em' }} href="https://linktr.ee/morpho_genesis" rel="history">
          <img className="text-color" style={{ width: '48px', opacity: 1 }} src="/assets/blog/twitter/linktr.png" />
        </a>
        <a href="#"> {/* Placeholder for the missing link */}
          <img className="text-color" style={{ width: '24px', opacity: 0 }} src="/img/eth.svg" />
        </a>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-bold">
        Contact: adriangarcia.morpho@gmail.com{" "}
      </h4>
    </section>
  );
}
