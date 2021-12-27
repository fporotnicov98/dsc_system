import React from 'react'
import { ChatAvatar } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    chatSidenav: {
        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        height: 750,
    },
}))

const ChatSidenav = ({
    currentUser,
    handleContactClick,
}) => {
    const classes = useStyles()

    return (
        <div className={clsx('bg-default', classes.chatSidenav)}>
            <div className="chat-sidenav__topbar flex items-center h-56 px-4 bg-primary">
                <ChatAvatar
                    status={currentUser.status}
                />
                <h5 className="ml-4 whitespace-pre mb-0 font-medium text-18 text-white">
                    Поротников Федор
                </h5>
            </div>
            <Scrollbar className="relative h-full">
                {recentContactList.map((contact, index) => (
                    <div
                        onClick={() => handleContactClick(contact.id)}
                        key={index}
                        className="flex items-center p-4 cursor-pointer  gray-on-hover"
                    >
                        <ChatAvatar
                            status={contact.status}
                        />
                        <div className="pl-4">
                            <p className="m-0">{contact.name}</p>
                        </div>
                    </div>
                ))}
                <Divider />
                {contactList.map((contact, index) => (
                    <div
                        onClick={() => handleContactClick(contact.id)}
                        key={index}
                        className="flex items-center px-4 py-1 cursor-pointer  gray-on-hover"
                    >
                        <ChatAvatar
                            status={contact.status}
                        />
                        <div className="pl-4">
                            <p>{contact.name}</p>
                        </div>
                    </div>
                ))}
            </Scrollbar>
        </div>
    )
}

const recentContactList = [
    {
        avatar: "/assets/images/faces/13.jpg",
        chatId: "89564a680b3249760ea21fe77",
        contactId: "323sa680b3249760ea21rt47",
        id: "323sa680b3249760ea21rt47",
        lastChatTime: "2017-06-12T02:10:18.931Z",
        mood: "",
        name: "Николай Петров",
        status: "online",
        unread: 4
    },
    {
        avatar: "/assets/images/faces/12.jpg",
        chatId: "3289564a680b2134760ea21fe7753",
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        id: "14663a3406eb47ffa63d4fec9429cb71",
        lastChatTime: "2019-03-10T02:10:18.931Z",
        mood: "",
        name: "Петр Васильев",
        status: "online",
        unread: 0
    }
]

const contactList = [
    {
        "id": "323sa680b3249760ea21rt47",
        "name": "Сергей Сидоров",
        "avatar": "/assets/images/faces/13.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "14663a3406eb47ffa63d4fec9429cb71",
        "name": "Руслан Безозеров",
        "avatar": "/assets/images/faces/12.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "43bd9bc59d164b5aea498e3ae1c24c3c",
        "name": "Наталья Литвинова",
        "avatar": "/assets/images/faces/3.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "3fc8e01f3ce649d1caf884fbf4f698e4",
        "name": "Елена Трифоненко",
        "avatar": "/assets/images/faces/16.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "e929b1d790ab49968ed8e34648553df4",
        "name": "Владимир Мазуров",
        "avatar": "/assets/images/faces/10.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "d6caf04bba614632b5fecf91aebf4564",
        "name": "Константин Щукин",
        "avatar": "/assets/images/faces/9.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "be0fb188c8e242f097fafa24632107e4",
        "name": "Чалков Максим",
        "avatar": "/assets/images/faces/5.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "dea902191b964a68ba5f2d93cff37e13",
        "name": "Ксения Колчакова",
        "avatar": "/assets/images/faces/15.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "0bf58f5ccc4543a9f8747350b7bda3c7",
        "name": "Евгений Максимов",
        "avatar": "/assets/images/faces/4.jpg",
        "status": "offline",
        "mood": ""
    },
    {
        "id": "c5d7498bbcb84d81fc72168871ac6a6e",
        "name": "Виктор Горшков",
        "avatar": "/assets/images/faces/2.jpg",
        "status": "offline",
        "mood": ""
    }
]

export default ChatSidenav
