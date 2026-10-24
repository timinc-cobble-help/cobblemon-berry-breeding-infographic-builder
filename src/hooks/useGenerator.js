import { useState, useCallback } from "react";

export default function useGenerator() {
    const [fileData, setFileData] = useState({});
    const [order, setOrder] = useState([]);

    const processData = useCallback(async (entry) => {
        return entry;
    }, []);

    const addFile = useCallback((files) => {
        setFileData(prevData => files.reduce((acc, file) => {
            acc[file.name] = { file };
            return acc;
        }, { ...prevData }));
        setOrder(prevOrder => [...prevOrder, ...files.map(file => file.name)]);
    }, [processData]);

    const removeFile = useCallback((file) => {
        setFileData(prevData => {
            const newData = { ...prevData };
            delete newData[file.name];
            return newData;
        });
        setOrder(prevOrder => prevOrder.filter(name => name !== file.name));
    }, []);

    const moveFile = useCallback((oldIndex, newIndex) => {
        setOrder(prevOrder => {
            const newOrder = [...prevOrder];
            [newOrder[newIndex], newOrder[oldIndex]] = [newOrder[oldIndex], newOrder[newIndex]];
            return newOrder;
        });
    }, []);

    const data = useMemo(() => order.map(name => fileData[name]), [order, fileData]);

    return {
        addFile,
        removeFile,
        moveFile,
        data,
    };
}