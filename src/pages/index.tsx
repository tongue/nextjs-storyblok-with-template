import Head from 'next/head'
import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Storyblok One Entry Example</title>
      </Head>
      <header>
        <h1>
          {props.story ? props.story.name : 'My Site'}
        </h1>
      </header>
      <main>
        <StoryblokComponent blok={props.story.content} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  } as const;

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
