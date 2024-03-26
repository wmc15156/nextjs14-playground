'use client';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <div onClick={onClose} style={{ position: 'absolute', right: '0', top: '0' }}>
      닫기
    </div>
  );
}
