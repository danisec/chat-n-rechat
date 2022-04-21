import React from "react";
import Head from "next/head";

export default function layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="header/logo-header.svg" />
        <link
          href="https://fontbit.io/css2?family=DM+Sans:wght@400;500;700&amp;family=Source+Sans+Pro:wght@300;400;600;700;900&amp;display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      {props.children}
    </div>
  );
}
