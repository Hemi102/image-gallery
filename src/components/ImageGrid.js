import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion, MotionConfig } from "framer-motion";
import { getStorage, ref, list } from "firebase/storage";
import { projectStorage } from "../firebase/config";
function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  const [urls, setUrls] = useState([]);
  // console.log(docs);
  const getUrl = async (items) => {
    const temp = [];
    await Promise.all(
      items.map(async (item, index) => {
        const storaageRef = projectStorage.ref(item._location.path);
        const url = await storaageRef.getDownloadURL();
        if (url) {
          console.log("result is ", url);
          temp.push({
            id: url + Math.random() + index,
            url,
            path: item._location.path,
          });
        }
      })
    );
    return temp;
  };
  async function pageTokenExample() {
    // setUrls([]);
    const storage = getStorage();
    const listRef = ref(storage, "");
    const firstPage = await list(listRef, { maxResults: 100 });

    if (firstPage?.items?.length > 0) {
      const result = await getUrl(firstPage?.items);

      setUrls(result);
    }
  }

  useEffect(() => {
    pageTokenExample();
  }, [docs]);
  console.log("docs ", urls);
  return (
    <div className="img-grid">
      {urls?.length > 0 &&
        urls.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploadded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
