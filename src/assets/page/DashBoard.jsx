import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { data } from "../../utility/firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { toast, ToastContainer } from "react-toastify";

const DashBoard = () => {
  const [selectedTutorId, setSelectedTutorId] = useState(null);
  const [tutor, setTutor] = useState([]);

  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(data, "tutor"));
    const tutorData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTutor(tutorData);
    console.log(tutorData);
  };

  const deleteTutor = async (id) => {
    try {
      await deleteDoc(doc(data, "tutor", id)); // Delete tutor from Firestore
      const updatedTutors = tutor.filter((tutor) => tutor.id !== id);
      setTutor(updatedTutors);
      toast.success("Ahihi!!!Xóa thành công"); // Update success message
    } catch (error) {
      console.error("Error deleting tutor: ", error);
      toast.error("Ahihi!Hãy gọi IT Support để được tư vấn về lỗi!");
    }
  };


  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-4xl">
        <Table className="bg-white shadow-lg rounded-lg">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px]">ID</TableHead> */}
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[50px]">Email</TableHead>
              <TableHead className="w-[50px]">University</TableHead>
              <TableHead className="w-[50px]">Current</TableHead>
              <TableHead className="w-[200px]">Subject</TableHead>
              <TableHead className="w-[100px]">Phone</TableHead>
              <TableHead className="w-[100px]">Message</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tutor.map((tutor) => (
              <TableRow key={tutor.id}>
                {/* <TableCell>{contact.id}</TableCell> */}
                <TableCell>{tutor.name}</TableCell>
                <TableCell>{tutor.email}</TableCell>
                <TableCell>{tutor.university}</TableCell>
                <TableCell>{tutor.current}</TableCell>
                <TableCell>{tutor.subject}</TableCell>
                <TableCell>{tutor.phone}</TableCell>
                <TableCell>{tutor.mess}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedTutorId(tutor.id)}
                      >
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Ahihi</DialogTitle>
                        <DialogDescription>
                          Bạn có chắc chắc muốn xóa? Nếu chưa quyết định hãy
                          nhấn nút X ở phía trên?
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() => deleteTutor(selectedTutorId)}
                        >
                          Yes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashBoard;
