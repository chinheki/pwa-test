import axios from "axios";
import { memo, useCallback, useState } from "react";
import { MyEquipments, Equipment } from './types';


export default function UseMyEquipments() {
  console.log('init use')
  const [myEquipments, setMyEquipments] = useState<MyEquipments>();

  const updateMyEquipments = useCallback(async () => {
    console.log('real updateMyEquipments')
    axios
      .get("https://api.github.com/repos/chinheki/pwa-test/issues/1/comments", {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.REACT_APP_ISSUE_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .catch((e) => {
        alert("get good list error");
        console.log(e);
      })
      .then((r:any) => {
        console.log(r);
        const equipmentList:Equipment[]=[]
        r.data.map((comment:any)=>{
          if(!!comment.body?.length){
            const context=JSON.parse(comment.body) as Equipment;
            context.id=`${comment.id}`
            equipmentList.push(context)
          }
        })
        console.log(equipmentList)
        setMyEquipments({ equipmentList });
      });
  },[setMyEquipments])

  return {
    myEquipments,
    updateMyEquipments,
  };
}
