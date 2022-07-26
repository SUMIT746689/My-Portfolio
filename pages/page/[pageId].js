import {useRouter} from 'next/router';

export default function PageId() {
    const router = useRouter()
    const {pageId} = router.query
    console.log(pageId);

  return (
    <div>Page No : {pageId}</div>
  )
}
