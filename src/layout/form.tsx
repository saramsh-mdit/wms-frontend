import { Button, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

function FormWrapper({
  children,
  title,
  hideBack,
}: PropsWithChildren & { title?: string; hideBack?: boolean }) {
  const navigate = useNavigate();
  return (
    <>
      {!hideBack && (
        <div className="absolute top-4">
          <Button onClick={() => navigate(-1)} variant="light">
            Back
          </Button>
        </div>
      )}
      <section className="mx-auto w-full max-w-sm p-2">
        {title && <Text className="text-center text-2xl my-4">{title}</Text>}
        {children}
      </section>
    </>
  );
}

export default FormWrapper;
