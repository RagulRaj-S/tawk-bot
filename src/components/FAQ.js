import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "unMazer.ai",
            content: `unMazer is a B2B SaaS data intelligence platform that enables key decisions for businesses. Our AI technology creates"Alternative Information Graph" by ingesting signals from multiple sources such as social media, news/articles, locations, transactions and private proprietary data`,
        },
        {
            title: "What is ChatBot",
            content: `A chatbot can be defined as an AI-based computer program that simulates human conversations. They are also known as digital assistants that understand human capabilities. Bots interpret and process the user requests and give prompt relevant answers.
            Bots can through voice as well as text and can be deployed across websites, applications, and messaging channels such as Facebook Messenger, Twitter or Whatsapp.`,
        },
        {
            title: "What is tawk.to",
            content:
                "tawk.to is a free live chat app that lets you monitor and chat with visitors on your website or from a free customizable page.",
        },
        {
            title: "What is React",
            content: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. `,
        },
        
    ],
};

const styles = {
     bgColor: 'white',
     titleTextColor: 'red',
     rowTitleColor: 'Black',
     rowContentTextSize: '16px',
     rowContentPaddingTop: '10px',
     rowContentPaddingBottom: '10px',
     rowContentPaddingLeft: '50px',
     arrowColor: "blue",
    rowContentColor: 'black',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App (){

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}