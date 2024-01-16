import { LuArrowLeft, LuArrowRight } from "react-icons/lu"
import Button from "../button/Button"
import React from "react"

const Table = ({
    children,
    tableExtras,
    overflowX,
    overflowY
}: {
    children: React.ReactNode;
    tableExtras?:string;
    overflowX?:string;
    overflowY?:string;
}) => {
    return (
        <div className={`overflow-x-${overflowX ? overflowX : "auto"} overflow-y-${overflowY ? overflowY : "hidden"}`}>
            <table className={`${tableExtras}`}>
                {children}
            </table>
        </div>
    )
}

const TBody = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

const THeade = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <thead>
            {children}
        </thead>
    )
}

const Tr = ({
    children,
    key,
    id,
    extras
}: {
    children: React.ReactNode,
    id?: any,
    key?: any,
    extras?:string
}) => {
    return (
        <tr key={key} id={id} className={extras}>
            {children}
        </tr>
    )
}

const Th = ({
    children,
    key,
    id,
    textalign = "start",
    colspan,
    extras
}: {
    children: React.ReactNode,
    id?: any,
    key?: any,
    textalign?:string,
    colspan?:number,
    extras?:string
}) => {
    return (
        <th colSpan={colspan ? colspan : 1} key={key} id={id} className={`${extras} border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-${textalign} dark:border-[#ffffff33]`}>
            {children}
        </th>
    )
}

const Td = ({
    children,
    key,
    id,
    extras
}: {
    children: React.ReactNode,
    id?: any,
    key?: any,
    extras?: string
}) => {
    return (
        <td className={`${extras} py-3 pr-4`} id={id} key={key}>
            {children}
        </td>
    )
}

type PagenationType = {
    totalPage: number
    currentPage: number
    onChange: any
}

const Pagenation = (p: PagenationType) => {
    return (
        <div className="my-5 w-[96.5%] flex justify-center items-center absolute bottom-0">
            <Button
                disabled={p.currentPage == 1}
                name={
                    <LuArrowLeft />
                }
                onCLick={() => p.onChange ? p.onChange(p.currentPage - 1) : {}}
            />

            <span className="m-auto">
                {p.currentPage} / {p.totalPage}
            </span>

            <Button
                disabled={p.currentPage == p.totalPage}
                name={
                    <LuArrowRight />
                }
                onCLick={() => p.onChange ? p.onChange(p.currentPage + 1) : {}}
            />

        </div>
    )
}

export { Pagenation, Table, TBody, THeade, Tr, Th, Td }