import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { GoBackButton } from '../common/go-back-button';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';
import { Modal } from '../base/modal';
import { useEffect, useState } from 'react';

interface TermNotionModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  notionPageId: string;
}

export function TermNotionModal({
  isModalOpen,
  onClose,
  notionPageId,
}: TermNotionModalProps) {
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, [notionPageId]);

  return (
    <Modal isOpen={isModalOpen}>
      <div className=" w-[500px] box-border px-2 relative">
        <div className="w-full h-14 px-4 py-2 sticky top-0 left-0 bg-background z-10">
          <GoBackButton onClickGobackButton={onClose} />
        </div>
        <div className="bg-white px-2 ">
          {Object.keys(response).length && (
            <NotionRenderer blockMap={response} fullPage={true} />
          )}
        </div>
      </div>
    </Modal>
  );
}
