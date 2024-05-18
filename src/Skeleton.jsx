import { Skeleton, Card } from "@nextui-org/react";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col items-center align-items-center">
        <Card className="w-4/5 space-y-20 p-4 m-3 max-w-screen-xl" radius="lg">
          <Skeleton className="rounded-lg w-3/5 max-w-xl">
            <div className="h-72 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg max-w-xl">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg max-w-4xl">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg max-w-md">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="h-24"></div>
        </Card>
        <Card className="w-4/5 space-y-20 p-4 m-3 max-w-screen-xl" radius="lg">
          <Skeleton className="rounded-lg w-3/5 max-w-xl">
            <div className="h-72 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg max-w-xl">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg max-w-4xl">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg max-w-md">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="h-24"></div>
        </Card>
        <Card className="w-4/5 space-y-20 p-4 m-3 max-w-screen-xl" radius="lg">
          <Skeleton className="rounded-lg w-3/5 max-w-xl">
            <div className="h-72 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg max-w-xl">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg max-w-4xl">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg max-w-md">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="h-24"></div>
        </Card>
      </div>
    </>
  );
}
