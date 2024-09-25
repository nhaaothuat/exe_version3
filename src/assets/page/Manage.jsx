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

const Manage = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(data, "contacts"));
    const contactsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setContacts(contactsData);
    console.log(contactsData);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(data, "contacts", id)); // Delete contact from Firestore
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
      toast.success("Hay");
    } catch (error) {
      console.error("Error deleting contact: ", error);
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
              <TableHead className="w-[200px]">Subject</TableHead>
              <TableHead className="w-[100px]">Phone</TableHead>
              <TableHead className="w-[100px]">Message</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                {/* <TableCell>{contact.id}</TableCell> */}
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.subject}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.mess}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedContactId(contact.id)}
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
                          onClick={() => deleteContact(selectedContactId)}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Manage;
