import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>ClinicaCIdad</title>
      </Head>
    <style jsx global>{`
    @font-face {
      font-family: "Avenir";
      src: url(/static/fonts/avenir.ttf);
      src: local("avenir"), url(/static/fonts/avenir.ttf) format("ttf"),
        /* IE6-IE8 */ url(/static/fonts/avenir.ttf) format("ttf"),
        /* Super Modern Browsers */ url(/static/fonts/avenir.ttf) format("ttf"),
        /* Modern Browsers */ url(/static/fonts/avenir.ttf) format("truetype"),
        /* Safari, Android, iOS */ url(/static/fonts/avenir.ttf) format("svg"); /* Legacy iOS */
      font-weight: normal;
      font-style: normal;
      }
      @font-face {
      font-family: "Avenir-Bold";
      src: url(/static/fonts/Avenir-bold.ttf);
      src: local("Avenir-bold"), url(/static/fonts/Avenir-bold.ttf) format("ttf"),
        /* IE6-IE8 */ url(/static/fonts/Avenir-bold.ttf) format("ttf"),
        /* Super Modern Browsers */ url(/static/fonts/Avenir-bold.ttf) format("ttf"),
        /* Modern Browsers */ url(/static/fonts/Avenir-bold.ttf) format("truetype"),
        /* Safari, Android, iOS */ url(/static/fonts/Avenir-bold.ttf) format("svg"); /* Legacy iOS */
      font-weight: normal;
      font-style: normal;
      }
      * {
        box-sizing: border-box;
      }
      .* {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        max-width: 100%;
      }
      h1,
      h2,
      h3,
      p {
        margin-top: 0;
        margin-bottom: 0;
      }

    `}</style>
    </React.Fragment>

  )
}

export default Meta;